import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAndDrinksComponent } from './food-and-drinks.component';

describe('FoodAndDrinksComponent', () => {
  let component: FoodAndDrinksComponent;
  let fixture: ComponentFixture<FoodAndDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodAndDrinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAndDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
