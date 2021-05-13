import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SessionService } from 'src/app/core/http/session/session.service';
import { ISession } from 'src/app/shared/interfaces/isession';
import { AlpacaAccount } from 'src/app/shared/models/alpaca-account';

@Component({
  selector: 'app-account-widget',
  templateUrl: './account-widget.component.html',
  styleUrls: ['./account-widget.component.scss']
})
export class AccountWidgetComponent implements OnInit, OnChanges {
  @Input() session!: ISession;
  account!: AlpacaAccount;
  isLoading = true;
  constructor(private sessionService: SessionService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.getAccount();
  }

  ngOnInit(): void {

  }

  getAccount() {
    this.isLoading = true;
    this.sessionService.getAccount(this.session.id).subscribe(account => {
      this.account = account;
      this.isLoading = false;
    });
  }

}
