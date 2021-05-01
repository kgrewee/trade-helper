import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AlpacaAccount, AlpacaAccountAdapter } from 'src/app/shared/models/alpaca-account';
import { environment } from 'src/environments/environment';
import { ErrorHandlerService } from '../../services/error/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private URL = environment.API_URL + "/account";

  constructor(
    private http: HttpClient,
    private adapter: AlpacaAccountAdapter,
    private errorHandler: ErrorHandlerService) {
  }

  getAccount(): Observable<AlpacaAccount> {
    return this.http.get<Account>(this.URL)
      .pipe(
        map((data: any) => this.adapter.adapt(data))
      ).pipe(
        catchError(this.errorHandler.handle)
      );
  }
}
