import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionsRoutingModule } from './sessions-routing.module';
import { SessionNavComponent } from './components/session-nav/session-nav.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { SessionsComponent } from './pages/sessions/sessions.component';
import { SessionFormComponent } from './components/session-form/session-form.component';
import { SessionViewComponent } from './components/session-view/session-view.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { AccountWidgetComponent } from './components/account-widget/account-widget.component';
import { OrdersWidgetComponent } from './components/orders-widget/orders-widget.component';
import { PositionsWidgetComponent } from './components/positions-widget/positions-widget.component';
import { AssetsWidgetComponent } from './components/assets-widget/assets-widget.component';
import { WatchlistWidgetComponent } from './components/watchlist-widget/watchlist-widget.component';
import { MarketStatusWidgetComponent } from './components/market-status-widget/market-status-widget.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ClockWidgetComponent } from './components/clock-widget/clock-widget.component';



@NgModule({
  declarations: [SessionFormComponent, SessionViewComponent, SessionNavComponent, SessionsComponent, AccountWidgetComponent, OrdersWidgetComponent, PositionsWidgetComponent, AssetsWidgetComponent, WatchlistWidgetComponent, MarketStatusWidgetComponent, ClockWidgetComponent],
  imports: [
    CommonModule,
    SessionsRoutingModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    MatTooltipModule,
    MatRadioModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    MatTableModule
  ]
})
export class SessionsModule { }
