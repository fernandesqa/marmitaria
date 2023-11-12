import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchboxesComponent } from './lunchboxes.component';

describe('LunchboxesComponent', () => {
  let component: LunchboxesComponent;
  let fixture: ComponentFixture<LunchboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LunchboxesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LunchboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
