import { Component, OnInit } from '@angular/core';
import { FileUtility } from 'src/app/shared/utility/file-utility';

@Component({
  selector: 'app-alpaca-paper-settings',
  templateUrl: './alpaca-paper-settings.component.html',
  styleUrls: ['./alpaca-paper-settings.component.scss']
})
export class AlpacaPaperSettingsComponent implements OnInit {
  apikey = '';
  secretkey = '';
  baseapi = '';
  dataapi = '';
  constructor() { }

  ngOnInit(): void {
  }

  export() {
    var data = 'apikey=' + this.apikey + '\nsecretkey=' + this.secretkey + '\nbaseapi=' + this.baseapi + '\ndataapi=' + this.dataapi;
    FileUtility.save('alpaca-paper.properties', data);
  }

  
}
