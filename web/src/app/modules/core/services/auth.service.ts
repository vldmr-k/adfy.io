import { Injectable } from '@angular/core';
import { SignInRequest, SignInResponse } from '@grpc/user/service';
import { UserServiceClient } from '@grpc/user/service.client';
import { base64decode } from '@protobuf-ts/runtime';
import { Observable, defer, from } from 'rxjs';

import * as moment from "moment"

const jwtKey: string = "jwt";

export function getToken(): string | null {
  return localStorage.getItem(jwtKey)
}

export class AuthData {
  constructor(public readonly id: string, public readonly email: string, public readonly name: string, public readonly exp: number) { }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   *
   * @param userClient
   */
  constructor(private readonly userClient: UserServiceClient) { }


  login(email: string, password: string, rememberMe: boolean): Observable<SignInResponse> {

    let request: SignInRequest = {
      email: email,
      password: password
    }

    const { response } = this.userClient.signIn(request)

    const response$ = from(response);
    response$.subscribe((response: SignInResponse) => {
      this.setSession(response.token);
    })

    return response$;
  }


  private setSession(token: string): void {
    localStorage.setItem(jwtKey, token)
  }


  public authData(token: string): AuthData {
    const clause: Array<string> = token.split('.')
    const json = atob(clause[1]);
    return JSON.parse(json) as AuthData
  }

  public isAuthenticated(): boolean {
    const token = getToken();
    if (token == null) {
      return false;
    }

    return moment().isBefore(this.getExpiration());
  }

  private getExpiration(): moment.Moment {

    const token = getToken();
    if (token == null) {
      return moment();
    }

    const authData = this.authData(token);
    return moment.unix(authData.exp);
  }
}
