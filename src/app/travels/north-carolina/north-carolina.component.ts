import { Component } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { NgFor, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-north-carolina',
  standalone: true,
  imports: [NgFor, NgOptimizedImage],
  templateUrl: './north-carolina.component.html',
  styleUrl: './north-carolina.component.css'
})
export class NorthCarolinaComponent {
  images: Record<string, any> = {};
  imageKeys: string[] = [];

  constructor(private imageService: ImageService) { }
  ngOnInit() {
    this.imageService.images$.subscribe((images: Record<string, any>) => {
      this.images = Object.fromEntries(
        Object.entries(images).filter(([key]) => key.startsWith('Wisteria'))
      );
      this.imageKeys = Object.keys(this.images);
    });
  }
}
