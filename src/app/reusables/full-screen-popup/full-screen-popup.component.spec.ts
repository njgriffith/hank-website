import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { FullScreenPopupComponent } from './full-screen-popup.component';

describe('FullScreenPopupComponent', () => {
  let component: FullScreenPopupComponent;
  let fixture: ComponentFixture<FullScreenPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullScreenPopupComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { name: 'test', imgSrc: 'assets/test.jpg' } }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullScreenPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
