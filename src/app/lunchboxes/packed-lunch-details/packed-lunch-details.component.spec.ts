import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackedLunchDetailsComponent } from './packed-lunch-details.component';

describe('PackedLunchDetailsComponent', () => {
  let component: PackedLunchDetailsComponent;
  let fixture: ComponentFixture<PackedLunchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackedLunchDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PackedLunchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
