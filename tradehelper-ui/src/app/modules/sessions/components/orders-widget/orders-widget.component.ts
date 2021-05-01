import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, merge } from 'rxjs';
import { startWith, delay, switchMap, map, catchError } from 'rxjs/operators';
import { OrderService } from 'src/app/core/http/order/order.service';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-orders-widget',
  templateUrl: './orders-widget.component.html',
  styleUrls: ['./orders-widget.component.scss']
})
export class OrdersWidgetComponent implements OnInit {
  displayedColumns: string[] = ['status', 'submittedAt', 'filledAt', 'symbol', 'assetClass', 'qty', 'filledQty', 'type', 'side', 'limitPrice', 'filledAvgPrice'];
  filteredAndPagedItems: Observable<Order[]>;
  resultsLength = 0;
  isLoadingResults = true;
  refreshInterval: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(private orderService: OrderService, private route: ActivatedRoute) {
    this.filteredAndPagedItems = of([]);
  }

  ngOnInit(): void {
    this.refreshInterval = setInterval(() => {
      this.getItems();
    }, 10000);
  }

  ngAfterViewInit() {
    this.getItems();
  }
  ngOnDestroy(): void {
    clearInterval(this.refreshInterval);
  }

  getItems() {
    this.filteredAndPagedItems = merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        delay(0),
        switchMap(() => {
          return this.orderService.getAll();
        }),
        map(data => {
          this.isLoadingResults = false;
          this.resultsLength = data.length;
          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          return of([]);
        })
      );
  }
  resetPaging(): void {
    this.paginator.pageIndex = 0;
  }
}
