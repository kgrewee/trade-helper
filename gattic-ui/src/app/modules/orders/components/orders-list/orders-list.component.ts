import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { merge, Observable, of } from 'rxjs';
import { catchError, delay, map, startWith, switchMap } from 'rxjs/operators';
import { OrderService } from 'src/app/core/http/order/order.service';
import { Order } from 'src/app/shared/models/order';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataService } from 'src/app/core/mocks/data/data.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['submittedAt', 'filledAt', 'symbol', 'qty', "filledQty"];
  filteredAndPagedItems: Observable<Order[]>;
  resultsLength = 0;
  isLoadingResults = true;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(private orderService: OrderService, private dataService: DataService) {
    this.filteredAndPagedItems = of([]);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
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


