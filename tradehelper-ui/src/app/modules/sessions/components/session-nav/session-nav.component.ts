import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/core/http/session/session.service';
import { ISession } from 'src/app/shared/interfaces/isession';

@Component({
  selector: 'app-session-nav',
  templateUrl: './session-nav.component.html',
  styleUrls: ['./session-nav.component.scss']
})
export class SessionNavComponent implements OnInit {
  sessions: ISession[] = [];

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit(): void {
    this.sessionService.getAll().subscribe(sessions => {
      this.sessions = sessions;
    });
  }

  delete(id: string){
    this.sessionService.delete(id).subscribe(result => {
      console.log("deleted");
      if(this.sessions.length > 0){
        this.router.navigateByUrl("/session/" + this.sessions[0].id);
      }else{
        this.router.navigateByUrl("/session/create");
      }
     
    });
  }

}
