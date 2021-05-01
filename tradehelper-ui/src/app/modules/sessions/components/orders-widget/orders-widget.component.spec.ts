import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersWidgetComponent } from './orders-widget.component';

describe('OrdersWidgetComponent', () => {
  let component: OrdersWidgetComponent;
  let fixture: ComponentFixture<OrdersWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
