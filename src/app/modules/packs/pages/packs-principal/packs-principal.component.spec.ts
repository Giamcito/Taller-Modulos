import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacksPrincipalComponent } from './packs-principal.component';

describe('PacksPrincipalComponent', () => {
  let component: PacksPrincipalComponent;
  let fixture: ComponentFixture<PacksPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PacksPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacksPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
