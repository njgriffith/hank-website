import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-full-screen-popup',
  standalone: true,
  imports: [],
  templateUrl: './full-screen-popup.component.html',
  styleUrl: './full-screen-popup.component.css'
})
export class FullScreenPopupComponent {
  constructor(
    public dialogRef: MatDialogRef<FullScreenPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string; imgSrc: string }
  ) {}

  @Input() imgSrc: string = '';
}
