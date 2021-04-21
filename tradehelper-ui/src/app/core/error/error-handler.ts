import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export class ApiErrorHandler {
      /**
   * Handles passed error and sends it on to user
   *
   * @param {HttpErrorResponse} error Error to be handled
   * @return {*} Throws error
   */
   public static handle(error: HttpErrorResponse) {
    console.log(error);  // Logs error to console
    return throwError(
      'Something bad happened. Try again later.'
    );
  }
}