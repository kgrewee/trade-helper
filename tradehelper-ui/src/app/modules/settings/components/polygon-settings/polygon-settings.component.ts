import { Component, OnInit } from '@angular/core';
import { FileUtility } from 'src/app/shared/utility/file-utility';

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

  export() {
    var data = 'baseapi=' + this.baseapi + '\nserverurl=' + this.serverurl;
    FileUtility.save('polygon.properties', data);
  }


}
