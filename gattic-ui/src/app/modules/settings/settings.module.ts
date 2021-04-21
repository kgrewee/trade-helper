import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './pages/settings/settings.component';
import { AlpacaLiveSettingsComponent } from './components/alpaca-live-settings/alpaca-live-settings.component';
import { AlpacaPaperSettingsComponent } from './components/alpaca-paper-settings/alpaca-paper-settings.component';
import { PolygonSettingsComponent } from './components/polygon-settings/polygon-settings.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [SettingsComponent, AlpacaLiveSettingsComponent, AlpacaPaperSettingsComponent, PolygonSettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule
  ]
})
export class SettingsModule { }
