import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/core/http/session/session.service';
import { ISession } from 'src/app/shared/interfaces/isession';

@Component({
  selector: 'app-session-view',
  templateUrl: './session-view.component.html',
  styleUrls: ['./session-view.component.scss']
})
export class SessionViewComponent implements OnInit {
  session!: ISession;
  constructor(private route: ActivatedRoute, private router: Router,
    private sessionService: SessionService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      var id = params.get('id');
      if (id !== undefined)
        this.sessionService.get(id!).subscribe(session => {
          this.session = session;
        });
    })
  }

}
