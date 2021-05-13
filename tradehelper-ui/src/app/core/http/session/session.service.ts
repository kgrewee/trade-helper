import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ISession, SessionAdapter } from 'src/app/shared/interfaces/isession';
import { AlpacaAccount, AlpacaAccountAdapter } from 'src/app/shared/models/alpaca-account';
import { AlpacaPosition, AlpacaPositionAdapter } from 'src/app/shared/models/alpaca-position';
import { Clock, ClockAdapter } from 'src/app/shared/models/clock';
import { Order, OrderAdapter } from 'src/app/shared/models/order';
import { environment } from 'src/environments/environment';
import { ErrorHandlerService } from '../../services/error/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private SESSION_URL = environment.API_URL + "/session";
  private ALPACA_URL = environment.API_URL + "/alpaca";

  constructor(
    private http: HttpClient,
    private sessionAdapter: SessionAdapter,
    private accountAdapter: AlpacaAccountAdapter,
    private clockAdapter: ClockAdapter,
    private positionAdapter: AlpacaPositionAdapter,
    private orderAdapter: OrderAdapter,
    private errorHandler: ErrorHandlerService) {
  }

  get(id: string): Observable<ISession> {
    return this.http.get<ISession>(this.SESSION_URL + "/" + id)
      .pipe(
        map((item) => this.sessionAdapter.adapt(item))
      ).pipe(
        catchError(this.errorHandler.handle)
      );
  }

  getAll(): Observable<ISession[]> {
    return this.http.get<ISession[]>(this.SESSION_URL)
      .pipe(
        map((data: any[]) => data.map((item) => this.sessionAdapter.adapt(item)))
      ).pipe(
        catchError(this.errorHandler.handle)
      );
  }

  getAccount(id: string): Observable<AlpacaAccount> {
    return this.http.get<Account>(this.ALPACA_URL + "/account?id=" + id)
      .pipe(
        map((data: any) => this.accountAdapter.adapt(data))
      ).pipe(
        catchError(this.errorHandler.handle)
      );
  }

  getClock(id: string): Observable<Clock> {
    return this.http.get<Clock>(this.ALPACA_URL + "/clock?id=" + id)
      .pipe(
        map((data: any) => this.clockAdapter.adapt(data))
      ).pipe(
        catchError(this.errorHandler.handle)
      );
  }

  getPositions(id: string): Observable<AlpacaPosition[]> {
    return this.http.get<AlpacaPosition[]>(this.ALPACA_URL + "/positions?id=" + id)
      .pipe(
        map((data: any[]) => data.map((item) => this.positionAdapter.adapt(item)))
      ).pipe(
        catchError(this.errorHandler.handle)
      );
  }

  getOrders(id: string, type: string): Observable<Order[]> {
    return this.http.get<Order[]>(this.ALPACA_URL + "/orders/" + type + "?id=" + id)
      .pipe(
        map((data: any[]) => data.map((item) => this.orderAdapter.adapt(item)))
      ).pipe(
        catchError(this.errorHandler.handle)
      );
  }
}
