import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AlpacaPosition, AlpacaPositionAdapter } from 'src/app/shared/models/alpaca-position';
import { environment } from 'src/environments/environment';
import { ErrorHandlerService } from '../../services/error/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private URL = environment.API_URL + "/positions";
  
  constructor(
    private http: HttpClient,
    private adapter: AlpacaPositionAdapter,
    private errorHandler: ErrorHandlerService) {
  }

  getPositions(): Observable<AlpacaPosition[]> {
    return this.http.get<AlpacaPosition[]>(this.URL)
      .pipe(
        map((data: any[]) => data.map((item) => this.adapter.adapt(item)))
      ).pipe(
        catchError(this.errorHandler.handle)
      );
  }
}
