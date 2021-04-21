import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alpaca-paper-settings',
  templateUrl: './alpaca-paper-settings.component.html',
  styleUrls: ['./alpaca-paper-settings.component.scss']
})
export class AlpacaPaperSettingsComponent implements OnInit {
  apikey = '';
  secretkey = '';
  baseapi = '';
  dataapi = '';
  constructor() { }

  ngOnInit(): void {
  }

}
