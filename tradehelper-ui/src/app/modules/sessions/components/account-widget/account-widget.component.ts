import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/http/account/account.service';
import { AlpacaAccount } from 'src/app/shared/models/alpaca-account';

@Component({
  selector: 'app-account-widget',
  templateUrl: './account-widget.component.html',
  styleUrls: ['./account-widget.component.scss']
})
export class AccountWidgetComponent implements OnInit {
  account!: AlpacaAccount;
  isLoading = true;
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAccount().subscribe(account => {
      this.account = account;
      this.isLoading = false;
    });
  }

}
