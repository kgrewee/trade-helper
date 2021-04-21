import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/core/services/file/file.service';
import { FileUtility } from 'src/app/shared/utility/file-utility';

@Component({
  selector: 'app-alpaca-live-settings',
  templateUrl: './alpaca-live-settings.component.html',
  styleUrls: ['./alpaca-live-settings.component.scss']
})
export class AlpacaLiveSettingsComponent implements OnInit {
  apikey = '';
  secretkey = '';
  baseapi = '';
  dataapi = '';

  constructor() { }

  ngOnInit(): void {
  }

  export() {
    var data = 'apikey=' + this.apikey + '\nsecretkey=' + this.secretkey + '\nbaseapi=' + this.baseapi + '\ndataapi=' + this.dataapi;
    FileUtility.save('alpaca.properties', data);
  }

}
