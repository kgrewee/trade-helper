import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from 'src/app/shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly ORDERS = [
    new Order("","",new Date(), new Date(), new Date(), new Date(),new Date(),new Date(),new Date(), new Date(), null, null, "1", "AAPL", "us_equity", 500, 500, "", "buy", "", 220, 200, 220, "filled", false, null),
    new Order("","",new Date(), new Date(), new Date(), new Date(),new Date(),new Date(),new Date(), new Date(), null, null, "1", "AAPL", "us_equity", 500, 500, "", "buy", "", 220, 200, 220, "filled", false, null),
    new Order("","",new Date(), new Date(), new Date(), new Date(),new Date(),new Date(),new Date(), new Date(), null, null, "1", "AAPL", "us_equity", 500, 500, "", "buy", "", 220, 200, 220, "filled", false, null),
    new Order("","",new Date(), new Date(), new Date(), new Date(),new Date(),new Date(),new Date(), new Date(), null, null, "1", "AAPL", "us_equity", 500, 500, "", "buy", "", 220, 200, 220, "filled", false, null),
    new Order("","",new Date(), new Date(), new Date(), new Date(),new Date(),new Date(),new Date(), new Date(), null, null, "1", "AAPL", "us_equity", 500, 500, "", "buy", "", 220, 200, 220, "filled", false, null),
    new Order("","",new Date(), new Date(), new Date(), new Date(),new Date(),new Date(),new Date(), new Date(), null, null, "1", "AAPL", "us_equity", 500, 500, "", "buy", "", 220, 200, 220, "filled", false, null),
    new Order("","",new Date(), new Date(), new Date(), new Date(),new Date(),new Date(),new Date(), new Date(), null, null, "1", "AAPL", "us_equity", 500, 500, "", "buy", "", 220, 200, 220, "filled", false, null),
    new Order("","",new Date(), new Date(), new Date(), new Date(),new Date(),new Date(),new Date(), new Date(), null, null, "1", "AAPL", "us_equity", 500, 500, "", "buy", "", 220, 200, 220, "filled", false, null),
    new Order("","",new Date(), new Date(), new Date(), new Date(),new Date(),new Date(),new Date(), new Date(), null, null, "1", "AAPL", "us_equity", 500, 500, "", "buy", "", 220, 200, 220, "filled", false, null),
    new Order("","",new Date(), new Date(), new Date(), new Date(),new Date(),new Date(),new Date(), new Date(), null, null, "1", "AAPL", "us_equity", 500, 500, "", "buy", "", 220, 200, 220, "filled", false, null),
    new Order("","",new Date(), new Date(), new Date(), new Date(),new Date(),new Date(),new Date(), new Date(), null, null, "1", "AAPL", "us_equity", 500, 500, "", "buy", "", 220, 200, 220, "filled", false, null),
    new Order("","",new Date(), new Date(), new Date(), new Date(),new Date(),new Date(),new Date(), new Date(), null, null, "1", "AAPL", "us_equity", 500, 500, "", "buy", "", 220, 200, 220, "filled", false, null)
  ];

  constructor() { }

  public getOrders(): Observable<Order[]>{
    return of(this.ORDERS);
  }
}
