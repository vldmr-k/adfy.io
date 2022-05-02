import { Injectable, Inject } from '@angular/core';
import * as moment from "moment"

import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

export const JWT_KEY: string = "jwt";

export class UserTokenData {
  constructor(public readonly id: string, public readonly email: string, public readonly name: string, public readonly exp: number) { }
}

@Injectable({ providedIn: "root" })
export class UserTokenStorage {

  constructor(@Inject(LOCAL_STORAGE) public storage: StorageService) {}

  getToken() : string | null {
    return this.storage.get(JWT_KEY) || null;
  }

  setToken(token : string) : void {
    this.storage.set(JWT_KEY, token)
  }

  hasToken(): boolean {
    return this.storage.has(JWT_KEY);
  }

  removeToken(): void {
    this.storage.remove(JWT_KEY)
  }

  get getData(): UserTokenData | null {
    const token = this.getToken();
    if(token == null) return null;

    const clause: Array<string> = token.split('.')
    const json = atob(clause[1]);
    return JSON.parse(json) as UserTokenData
  }

  public isAuthenticated(): boolean {
    return this.hasToken() && moment().isBefore(this.getExpiration());
  }

  private getExpiration(): moment.Moment {
    if (this.getData == null) return moment();
    return moment.unix(this.getData.exp);
  }
}
