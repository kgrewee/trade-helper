import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlpacaLiveSettingsComponent } from './alpaca-live-settings.component';

describe('AlpacaLiveSettingsComponent', () => {
  let component: AlpacaLiveSettingsComponent;
  let fixture: ComponentFixture<AlpacaLiveSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlpacaLiveSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlpacaLiveSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
