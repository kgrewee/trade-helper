import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alpaca-live-settings',
  templateUrl: './alpaca-live-settings.component.html',
  styleUrls: ['./alpaca-live-settings.component.scss']
})
export class AlpacaLiveSettingsComponent implements OnInit {
  apikey = '';
  secretkey = '';
  baseapi = '';
  dataapi = '';
  constructor() { }

  ngOnInit(): void {
  }

}
