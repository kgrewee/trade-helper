import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/core/http/order/order.service';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  private orders: Order[];
  constructor(private orderService: OrderService) { 
    this.orders = [];
  }

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders(){
    this.orderService.getAll().subscribe(orders => {
      this.orders = orders;
      console.log(this.orders);
    });
  }

  getOpenOrders(){
    this.orderService.getOpen().subscribe(orders => {
      this.orders = orders;
    });
  }

  getClosedOrders(){
    this.orderService.getClosed().subscribe(orders => {
      this.orders = orders;
    });
  }
}
