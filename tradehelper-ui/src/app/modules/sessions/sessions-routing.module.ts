import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionFormComponent } from './pages/session-form/session-form.component';
import { SessionViewComponent } from './pages/session-view/session-view.component';

const routes: Routes = [
  {path: "session", component: SessionFormComponent},
  {path: "session/:id", component: SessionViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule { }
