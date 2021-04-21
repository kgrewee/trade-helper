import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polygon-settings',
  templateUrl: './polygon-settings.component.html',
  styleUrls: ['./polygon-settings.component.scss']
})
export class PolygonSettingsComponent implements OnInit {
  baseapi = '';
  serverurl = '';
  constructor() { }

  ngOnInit(): void {
  }

}
