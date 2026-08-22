import { Component } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { NgFor, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-new-mexico',
  standalone: true,
  imports: [NgFor, NgOptimizedImage],
  templateUrl: './new-mexico.component.html',
  styleUrl: './new-mexico.component.css'
})
export class NewMexicoComponent {
  images: Record<string, any> = {};
  imageKeys: string[] = [];

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageService.images$.subscribe((images: Record<string, any>) => {
      this.images = Object.fromEntries(
        Object.entries(images).filter(([key]) => key.startsWith('New Mexico'))
      );
      this.imageKeys = Object.keys(this.images);
    });
  }
}
