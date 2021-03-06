import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { SettingsModule } from './modules/settings/settings.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SessionsModule } from './modules/sessions/sessions.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HomeModule,
    SettingsModule,
    BrowserAnimationsModule,
    SessionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
