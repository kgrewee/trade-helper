import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/core/http/session/session.service';
import { RefreshService } from 'src/app/core/services/refresh/refresh.service';
import { ISession } from 'src/app/shared/interfaces/isession';

@Component({
  selector: 'app-session-nav',
  templateUrl: './session-nav.component.html',
  styleUrls: ['./session-nav.component.scss']
})
export class SessionNavComponent implements OnInit {
  sessions: ISession[] = [];

  constructor(private sessionService: SessionService, private router: Router, private refreshService: RefreshService) { }

  ngOnInit(): void {
    this.refreshService.refresh.subscribe(refresh => {
      this.getSessions();
      this.firstSession();
    })
  }

  getSessions() {
    this.sessionService.getAll().subscribe(sessions => {
      this.sessions = sessions;
    });
  }

  firstSession(){
    this.refreshService.firstSession.subscribe(first => {
      if(this.sessions.length > 0){
        this.router.navigateByUrl("/session/" + this.sessions[0].id);
      }
    })
  }
}
