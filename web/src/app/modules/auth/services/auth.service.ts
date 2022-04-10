import { Injectable } from '@angular/core';
import { SignInRequest, SignInResponse } from '@grpc/user/service';
import { UserServiceClient } from '@grpc/user/service.client';
import { Observable, defer, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   *
   * @param userClient
   */
  constructor(private readonly userClient : UserServiceClient) { }


  login(email : string, password : string, rememberMe : boolean) : Observable<SignInResponse> {

    let request : SignInRequest = {
      email: email,
      password: password
    }

    const { response } =  this.userClient.signIn(request)

    return from(response)
  }

  private setSession(token : string, expiresIn : bigint) {
    const jwt = JSON.stringify({
      token: token,
      expiresIn: expiresIn
    })
    localStorage.setItem('token', jwt)
  }

}
