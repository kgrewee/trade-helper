import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/core/http/session/session.service';
import { ISession } from 'src/app/shared/interfaces/isession';

@Component({
  selector: 'app-session-nav',
  templateUrl: './session-nav.component.html',
  styleUrls: ['./session-nav.component.scss']
})
export class SessionNavComponent implements OnInit {
  sessions: ISession[] = [];

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.sessionService.getAll().subscribe(sessions => {
      this.sessions = sessions;
    });
  }

}
