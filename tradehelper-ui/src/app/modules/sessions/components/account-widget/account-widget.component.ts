import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { finalize } from 'rxjs/operators';
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
  account: AlpacaAccount | undefined;
  isLoading = true;
  constructor(private sessionService: SessionService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.getAccount();
  }

  ngOnInit(): void {

  }

  getAccount() {
    this.isLoading = true;
    this.account = undefined;
    this.sessionService.getAccount(this.session.id).pipe(
      finalize(() => this.isLoading = false)
    ).subscribe(account => {
      this.account = account;
      this.isLoading = false;
    });
  }

}
