import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable, of, merge } from 'rxjs';
import { startWith, delay, switchMap, map, catchError } from 'rxjs/operators';
import { PositionService } from 'src/app/core/http/position/position.service';
import { AlpacaPosition } from 'src/app/shared/models/alpaca-position';

@Component({
  selector: 'app-positions-widget',
  templateUrl: './positions-widget.component.html',
  styleUrls: ['./positions-widget.component.scss']
})
export class PositionsWidgetComponent implements OnInit {
  displayedColumns: string[] = ['symbol', 'exchange', 'assetClass', 'avgEntryPrice', 'qty', 'side', 'marketValue', 'costBasis', 'unrealizedPl', 'unrealizedPlpc', 'unrealizedIntradayPl', 'unrealizedIntradayPlpc', 'currentPrice', 'lastdayPrice', 'changeToday'];
  filteredAndPagedItems: Observable<AlpacaPosition[]>;
  resultsLength = 0;
  isLoading = true;
  refreshInterval: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(private positionService: PositionService) {
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
          return this.positionService.getPositions();
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
