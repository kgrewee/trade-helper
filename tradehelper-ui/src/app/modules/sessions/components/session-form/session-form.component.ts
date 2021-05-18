import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/core/http/session/session.service';
import { AlpacaSessionAdapter } from 'src/app/shared/models/alpaca-session';
import { v4 as uuidv4 } from 'uuid';
import { BinanceSessionAdapter } from 'src/app/shared/models/binance-session';
import { Exchange } from 'src/app/shared/enums/exchange';

interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.scss']
})
export class SessionFormComponent implements OnInit {
  exchange = "ALPACA";
  name = '';
  desc = '';
  apikey = '';
  secretkey = '';
  baseapi = 'PAPER';
  dataapi = 'IEX';
  clientid = '';
  oauth = '';

  exchangeList: Option[] = [{ value: 'ALPACA', viewValue: "Alpaca" }, { value: 'BINANCE', viewValue: "Binance" }, { value: 'TDA', viewValue: "TDA" }];
  apiList: Option[] = [{ value: 'PAPER', viewValue: "PAPER" }, { value: 'LIVE', viewValue: "LIVE" }];
  dataList: Option[] = [{ value: 'IEX', viewValue: "IEX" }];

  constructor(private sessionService: SessionService,
    private alpacaSessionAdapter: AlpacaSessionAdapter,
    private binanceSessionAdapter: BinanceSessionAdapter) { }

  ngOnInit(): void {
  }

  clear() {
    this.name = '';
    this.desc = '';
    this.apikey = '';
    this.secretkey = '';
    this.baseapi = '';
    this.dataapi = '';
    this.clientid = '';
    this.oauth = '';
  }

  submit() {
    console.log("submitted");
    switch (this.exchange) {
      case "ALPACA":
        this.sessionService.create(this.alpacaSessionAdapter.adapt({
          id: uuidv4(), name: this.name, exchange: Exchange.ALPACA, desc: this.desc, key: this.apikey,
          secret: this.secretkey,
          apiType: this.baseapi,
          dataType: this.dataapi
        })).subscribe(result => {
          
        });
        break;
      case "BINANCE":
        this.sessionService.create(this.binanceSessionAdapter.adapt({
          id: uuidv4(), name: this.name, exchange: Exchange.BINANCE, desc: this.desc, key: this.apikey,
          secret: this.secretkey
        })).subscribe(result => {

        });
        break;
      default:
    }
  }

}
