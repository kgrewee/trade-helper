import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistWidgetComponent } from './watchlist-widget.component';

describe('WatchlistWidgetComponent', () => {
  let component: WatchlistWidgetComponent;
  let fixture: ComponentFixture<WatchlistWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchlistWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchlistWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
