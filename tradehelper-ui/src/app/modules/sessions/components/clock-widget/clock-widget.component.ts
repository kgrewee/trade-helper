import { Component, OnInit } from '@angular/core';
import { ClockService } from 'src/app/core/http/clock/clock.service';
import { Clock } from 'src/app/shared/models/clock';

@Component({
  selector: 'app-clock-widget',
  templateUrl: './clock-widget.component.html',
  styleUrls: ['./clock-widget.component.scss']
})
export class ClockWidgetComponent implements OnInit {
  clock!: Clock;
  constructor(private clockService: ClockService) { }

  ngOnInit(): void {
    this.clockService.getClock().subscribe(clock => {
      this.clock = clock;
    })
  }

}
