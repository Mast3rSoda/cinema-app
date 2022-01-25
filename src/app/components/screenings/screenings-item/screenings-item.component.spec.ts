import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningsItemComponent } from './screenings-item.component';

describe('ScreeningsItemComponent', () => {
  let component: ScreeningsItemComponent;
  let fixture: ComponentFixture<ScreeningsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreeningsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreeningsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
