import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() {
  }
  /**
* Handles passed error and sends it on to user
*
* @param {HttpErrorResponse} error Error to be handled
* @return {*} Throws error
*/
  public handle(error: HttpErrorResponse) {
    console.log(error);
    return throwError(
      'Something bad happened. Try again later.'
    );
  }
}
