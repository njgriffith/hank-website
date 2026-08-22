import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthCarolinaComponent } from './north-carolina.component';

describe('NorthCarolinaComponent', () => {
  let component: NorthCarolinaComponent;
  let fixture: ComponentFixture<NorthCarolinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NorthCarolinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NorthCarolinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
