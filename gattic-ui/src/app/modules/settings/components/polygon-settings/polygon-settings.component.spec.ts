import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonSettingsComponent } from './polygon-settings.component';

describe('PolygonSettingsComponent', () => {
  let component: PolygonSettingsComponent;
  let fixture: ComponentFixture<PolygonSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolygonSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
