import { Injectable } from '@angular/core';
import { SignInRequest, SignInResponse } from '@grpc/user/service';
import { UserServiceClient } from '@grpc/user/service.client';
import { BehaviorSubject, from, Subject } from 'rxjs';
import { UserTokenStorage } from '@core/services/user-token.service';


const jwtKey: string = "jwt";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _signInResponse$ = new Subject<SignInResponse>();

  /**
   *
   * @param userClient
   */
  constructor(
    private readonly userClient: UserServiceClient,
    private readonly usetTokenStorage: UserTokenStorage
    ) { }



  login(email: string, password: string, rememberMe: boolean) {

    let request: SignInRequest = {
      email: email,
      password: password
    }

  }
}
