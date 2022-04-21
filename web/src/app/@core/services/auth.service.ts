import { Injectable } from '@angular/core';
import { SignInRequest, SignInResponse } from '@grpc/user/service';
import { UserServiceClient } from '@grpc/user/service.client';
import { BehaviorSubject, from, Subject } from 'rxjs';
import { UserTokenStorage } from '@core/storage/user-token.service';


const jwtKey: string = "jwt";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _usert$ = new Subject<SignInResponse>();

  /**
   *
   * @param userClient
   */
  constructor(
    private readonly userClient: UserServiceClient,
    private readonly usetTokenStorage: UserTokenStorage
    ) { }

  get singInResponse() : Subject<SignInResponse> {
    return this._signInResponse$
  }

  async login(email: string, password: string, rememberMe: boolean) {

    let request: SignInRequest = {
      email: email,
      password: password
    }

    try {
      const {response} = await this.userClient.signIn(request)
      this.usetTokenStorage.setToken(response.token)
      this._signInResponse$.next(response)
    } catch(e) {
      this._signInResponse$.error(e)
    }
  }
}
