import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionsRoutingModule } from './sessions-routing.module';
import { SessionFormComponent } from './pages/session-form/session-form.component';
import { SessionViewComponent } from './pages/session-view/session-view.component';
import { SessionNavComponent } from './components/session-nav/session-nav.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SessionFormComponent, SessionViewComponent, SessionNavComponent],
  imports: [
    CommonModule,
    SessionsRoutingModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ]
})
export class SessionsModule { }
