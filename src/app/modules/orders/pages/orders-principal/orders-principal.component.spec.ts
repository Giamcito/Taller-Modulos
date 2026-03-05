import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersPrincipalComponent } from './orders-principal.component';

describe('OrdersPrincipalComponent', () => {
  let component: OrdersPrincipalComponent;
  let fixture: ComponentFixture<OrdersPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdersPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
