import { Component, Input, OnInit } from '@angular/core';
import { ISession } from 'src/app/shared/interfaces/isession';

@Component({
  selector: 'app-market-status-widget',
  templateUrl: './market-status-widget.component.html',
  styleUrls: ['./market-status-widget.component.scss']
})
export class MarketStatusWidgetComponent implements OnInit {
  @Input() session!: ISession;
  constructor() { }

  ngOnInit(): void {
  }

}
