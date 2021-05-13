import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SessionService } from 'src/app/core/http/session/session.service';
import { ISession } from 'src/app/shared/interfaces/isession';
import { Clock } from 'src/app/shared/models/clock';

@Component({
  selector: 'app-clock-widget',
  templateUrl: './clock-widget.component.html',
  styleUrls: ['./clock-widget.component.scss']
})
export class ClockWidgetComponent implements OnInit, OnChanges {
  @Input() session!: ISession;
  clock!: Clock;
  isLoading = true;
  constructor(private sessionService: SessionService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.getClock();
  }

  ngOnInit(): void {

  }

  getClock() {
    this.isLoading = true;
    this.sessionService.getClock(this.session.id).subscribe(clock => {
      this.clock = clock;
      this.isLoading = false;
    });
  }

}
