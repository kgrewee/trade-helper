import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionsWidgetComponent } from './positions-widget.component';

describe('PositionsWidgetComponent', () => {
  let component: PositionsWidgetComponent;
  let fixture: ComponentFixture<PositionsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionsWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
