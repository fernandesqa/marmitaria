import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackedLunchListComponent } from './packed-lunch-list.component';

describe('PackedLunchListComponent', () => {
  let component: PackedLunchListComponent;
  let fixture: ComponentFixture<PackedLunchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackedLunchListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PackedLunchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
