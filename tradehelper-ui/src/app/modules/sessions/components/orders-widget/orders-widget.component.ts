import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, merge } from 'rxjs';
import { startWith, delay, switchMap, map, catchError } from 'rxjs/operators';
import { SessionService } from 'src/app/core/http/session/session.service';
import { ISession } from 'src/app/shared/interfaces/isession';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-orders-widget',
  templateUrl: './orders-widget.component.html',
  styleUrls: ['./orders-widget.component.scss']
})
export class OrdersWidgetComponent implements OnInit, OnChanges{
  @Input() session!: ISession;
  displayedColumns: string[] = ['status', 'submittedAt', 'filledAt', 'symbol', 'assetClass', 'qty', 'filledQty', 'type', 'side', 'limitPrice', 'filledAvgPrice'];
  filteredAndPagedItems: Observable<Order[]>;
  resultsLength = 0;
  isLoading = true;
  refreshInterval: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(private sessionService: SessionService, private route: ActivatedRoute) {
    this.filteredAndPagedItems = of([]);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.getItems();
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
    this.isLoading = true;
    this.filteredAndPagedItems = merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        delay(0),
        switchMap(() => {
          return this.sessionService.getOrders(this.session.id, "all");
        }),
        map(data => {
          this.isLoading = false;
          this.resultsLength = data.length;
          return data;
        }),
        catchError(() => {
          this.isLoading = false;
          return of([]);
        })
      );
  }
  resetPaging(): void {
    this.paginator.pageIndex = 0;
  }
}
