import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { portfolioGalleryMap } from './portfolio/portfolio.component';
import { travelGalleryMap } from './travels/travels.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  travelEntries = Object.entries(travelGalleryMap);
  portfolioEntries = Object.entries(portfolioGalleryMap);
}
