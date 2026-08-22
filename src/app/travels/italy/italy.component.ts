import { Component } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { NgFor, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-italy',
  standalone: true,
  imports: [NgFor, NgOptimizedImage],
  templateUrl: './italy.component.html',
  styleUrl: './italy.component.css'
})
export class ItalyComponent {
  images: Record<string, any> = {};
  imageKeys: string[] = [];

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageService.images$.subscribe((images: Record<string, any>) => {
      this.images = Object.fromEntries(
        Object.entries(images).filter(([key]) => key.startsWith('QUE-BELLA'))
      );
      this.imageKeys = Object.keys(this.images);
    });
  }
}
