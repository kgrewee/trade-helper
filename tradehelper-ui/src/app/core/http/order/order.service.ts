import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order, OrderAdapter } from 'src/app/shared/models/order';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ErrorHandlerService } from '../../services/error/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private URL = environment.API_URL + "/alpaca/orders";
  
  constructor(
    private http: HttpClient,
    private adapter: OrderAdapter,
    private errorHandler: ErrorHandlerService) {
  }

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.URL + "/all")
      .pipe(
        map((data: any[]) => data.map((item) => this.adapter.adapt(item)))
      ).pipe(
        catchError(this.errorHandler.handle)
      );
  }

  getOpen(): Observable<Order[]> {
    return this.http.get<Order[]>(this.URL + "/open")
      .pipe(
        map((data: any[]) => data.map((item) => this.adapter.adapt(item)))
      ).pipe(
        catchError(this.errorHandler.handle)
      );
  }

  getClosed(): Observable<Order[]> {
    return this.http.get<Order[]>(this.URL + "/closed")
      .pipe(
        map((data: any[]) => data.map((item) => this.adapter.adapt(item)))
      ).pipe(
        catchError(this.errorHandler.handle)
      );
  }
}
