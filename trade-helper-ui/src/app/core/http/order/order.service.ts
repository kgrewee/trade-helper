import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order, OrderAdapter } from 'src/app/shared/models/order';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiErrorHandler } from '../../error/error-handler';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private URL = environment.API_URL + "/orders";
  
  constructor(
    private http: HttpClient,
    private adapter: OrderAdapter) {
  }

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.URL + "/all")
      .pipe(
        map((data: any[]) => data.map((item) => this.adapter.adapt(item)))
      ).pipe(
        catchError(ApiErrorHandler.handle)
      );
  }

  getOpen(): Observable<Order[]> {
    return this.http.get<Order[]>(this.URL + "/open")
      .pipe(
        map((data: any[]) => data.map((item) => this.adapter.adapt(item)))
      ).pipe(
        catchError(ApiErrorHandler.handle)
      );
  }

  getClosed(): Observable<Order[]> {
    return this.http.get<Order[]>(this.URL + "/closed")
      .pipe(
        map((data: any[]) => data.map((item) => this.adapter.adapt(item)))
      ).pipe(
        catchError(ApiErrorHandler.handle)
      );
  }
}
