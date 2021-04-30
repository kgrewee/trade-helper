import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionFormComponent } from './components/session-form/session-form.component';
import { SessionViewComponent } from './components/session-view/session-view.component';
import { SessionsComponent } from './pages/sessions/sessions.component';

const routes: Routes = [
  {
    path: "session", component: SessionsComponent, children: [
      { path: 'create', component: SessionFormComponent },
      { path: ':id', component: SessionViewComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule { }
