import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { merge, Observable, of } from 'rxjs';
import { catchError, delay, map, startWith, switchMap } from 'rxjs/operators';
import { OrderService } from 'src/app/core/http/order/order.service';
import { Order } from 'src/app/shared/models/order';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['status', 'submittedAt', 'filledAt', 'symbol', 'assetClass', 'qty', 'filledQty', 'type', 'side', 'limitPrice', 'filledAvgPrice'];
  filteredAndPagedItems: Observable<Order[]>;
  resultsLength = 0;
  isLoadingResults = true;
  refreshInterval: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(private orderService: OrderService) {
    this.filteredAndPagedItems = of([]);
  }

  ngOnInit(): void {
    this.refreshInterval = setInterval(() => {
      this.getItems();
    }, 10000)
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


