import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export const portfolioGalleryMap: Record<string, { title: string; key: string; image: string }> = {
  leviathan: { title: 'Leviathan', key: 'Leviathan', image: 'assets/Leviathan/leviathan1.jpg' },
  'thank-you-joel': { title: 'Thank You, Joel', key: 'Thank You, Joel', image: 'assets/Thank You, Joel/slides-01_.jpg' },
  totems: { title: 'Totems', key: 'Totems', image: 'assets/Totems/Tilson_Hank_01.jpg' },
  wisteria: { title: 'Wisteria', key: 'Wisteria', image: 'assets/Wisteria/wisteria2.jpg' }
};


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  galleryMap = portfolioGalleryMap;
  galleryEntries = Object.entries(this.galleryMap);
}
