import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningsMainComponent } from './screenings-main.component';

describe('ScreeningsMainComponent', () => {
  let component: ScreeningsMainComponent;
  let fixture: ComponentFixture<ScreeningsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreeningsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreeningsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
