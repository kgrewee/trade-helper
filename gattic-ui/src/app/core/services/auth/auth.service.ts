import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public static getToken(): string {
    return "gattic:mach1ne";
  }
}
