import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/core/services/file/file.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
  }

  save() { this.fileService.save.next(true) }

  reset() {}
}
