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
  exchange: any = "";
  exchangeList: Exchange[] = [{value:'ALPACA', viewValue: "Alpaca"}, {value:'BINANCE', viewValue: "Binance"}, {value:'TDA', viewValue: "TDA"}];
  constructor() { }

  ngOnInit(): void {
  }

}
