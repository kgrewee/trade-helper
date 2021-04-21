import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlpacaPaperSettingsComponent } from './alpaca-paper-settings.component';

describe('AlpacaPaperSettingsComponent', () => {
  let component: AlpacaPaperSettingsComponent;
  let fixture: ComponentFixture<AlpacaPaperSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlpacaPaperSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlpacaPaperSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
