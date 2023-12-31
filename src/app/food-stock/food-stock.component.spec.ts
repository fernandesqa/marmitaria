import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodStockComponent } from './food-stock.component';

describe('FoodStockComponent', () => {
  let component: FoodStockComponent;
  let fixture: ComponentFixture<FoodStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodStockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
