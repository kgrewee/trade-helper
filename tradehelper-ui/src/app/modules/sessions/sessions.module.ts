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



@NgModule({
  declarations: [SessionFormComponent, SessionViewComponent, SessionNavComponent, SessionsComponent],
  imports: [
    CommonModule,
    SessionsRoutingModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatSidenavModule
  ]
})
export class SessionsModule { }
