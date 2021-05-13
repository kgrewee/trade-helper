import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ISession } from 'src/app/shared/interfaces/isession';
import { AlpacaSessionAdapter } from 'src/app/shared/models/alpaca-session';
import { BinanceSessionAdapter } from 'src/app/shared/models/binance-session';
import { environment } from 'src/environments/environment';
import { ErrorHandlerService } from '../../services/error/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private URL = environment.API_URL + "/session";
  
  constructor(
    private http: HttpClient,
    private alpacaAdapter: AlpacaSessionAdapter,
    private binanceAdapter: BinanceSessionAdapter,
    private errorHandler: ErrorHandlerService) {
  }

  getAll(): Observable<ISession[]> {
    return this.http.get<ISession[]>(this.URL)
      .pipe(
        map((data: any[]) => data.map((item) => item))
      ).pipe(
        catchError(this.errorHandler.handle)
      );
  }
}
