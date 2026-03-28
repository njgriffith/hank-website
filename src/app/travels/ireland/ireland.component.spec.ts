import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrelandComponent } from './ireland.component';

describe('IrelandComponent', () => {
  let component: IrelandComponent;
  let fixture: ComponentFixture<IrelandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IrelandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IrelandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
