import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningBuyComponent } from './screening-buy.component';

describe('ScreeningBuyComponent', () => {
  let component: ScreeningBuyComponent;
  let fixture: ComponentFixture<ScreeningBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreeningBuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreeningBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
