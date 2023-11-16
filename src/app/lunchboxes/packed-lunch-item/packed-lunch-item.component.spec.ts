import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackedLunchItemComponent } from './packed-lunch-item.component';

describe('PackedLunchItemComponent', () => {
  let component: PackedLunchItemComponent;
  let fixture: ComponentFixture<PackedLunchItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackedLunchItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PackedLunchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
