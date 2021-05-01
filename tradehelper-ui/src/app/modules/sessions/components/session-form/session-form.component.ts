import { Component, OnInit } from '@angular/core';

interface Exchange {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.scss']
})
export class SessionFormComponent implements OnInit {
  exchange = "alpaca";
  exchangeList: Exchange[] = [{value:'ALPACA', viewValue: "Alpaca"}, {value:'BINANCE', viewValue: "Binance"}, {value:'TDA', viewValue: "TDA"}];
  apikey = '';
  secretkey = '';
  baseapi = '';
  dataapi = '';

  constructor() { }

  ngOnInit(): void {
  }

}
