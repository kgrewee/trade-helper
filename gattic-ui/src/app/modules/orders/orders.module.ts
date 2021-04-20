import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './pages/orders/orders.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [OrdersComponent, OrdersListComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    MatTableModule
  ]
})
export class OrdersModule { }
