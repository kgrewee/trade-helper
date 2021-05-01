import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketStatusWidgetComponent } from './market-status-widget.component';

describe('MarketStatusWidgetComponent', () => {
  let component: MarketStatusWidgetComponent;
  let fixture: ComponentFixture<MarketStatusWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketStatusWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketStatusWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
