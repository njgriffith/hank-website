import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export const galleryMap: Record<string, { title: string; key: string; image: string }> = {
  ireland: { title: 'Ireland', key: 'Ireland', image: 'assets/Ireland/ireland9.jpg' },
  greece: { title: 'Greece', key: 'ELLAS', image: 'assets/ELLAS/ellas-16_.jpg' },
  'new-mexico': { title: 'New Mexico', key: 'New Mexico', image: 'assets/New Mexico/newmex4.jpg' },
  italy: { title: 'Italy', key: 'QUE-BELLA', image: 'assets/QUE-BELLA/bella-01_.jpg' },
  'north-carolina': { title: 'North Carolina', key: 'Leviathan', image: 'assets/Leviathan/leviathan6.jpg' },
};

@Component({
  selector: 'app-travels',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './travels.component.html',
  styleUrl: './travels.component.css'
})
export class TravelsComponent {
  galleryMap = galleryMap;
  galleryEntries = Object.entries(this.galleryMap);
}
