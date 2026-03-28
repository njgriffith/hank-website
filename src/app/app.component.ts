import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LandingPageComponent } from "./landing-page/landing-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isIreland: boolean = false;
  
}
