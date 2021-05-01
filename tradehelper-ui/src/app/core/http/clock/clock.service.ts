import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Clock, ClockAdapter } from 'src/app/shared/models/clock';
import { environment } from 'src/environments/environment';
import { ErrorHandlerService } from '../../services/error/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  private URL = environment.API_URL + "/clock";

  constructor(
    private http: HttpClient,
    private adapter: ClockAdapter,
    private errorHandler: ErrorHandlerService) {
  }

  getClock(): Observable<Clock> {
    return this.http.get<Clock>(this.URL)
      .pipe(
        map((data: any) => this.adapter.adapt(data))
      ).pipe(
        catchError(this.errorHandler.handle)
      );
  }
}
