import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-greece',
  standalone: true,
  imports: [NgFor, NgOptimizedImage],
  templateUrl: './greece.component.html',
  styleUrl: './greece.component.css'
})
export class GreeceComponent {
  images: Record<string, any> = {};
  imageKeys: string[] = [];

  constructor(private imageService: ImageService){}

  ngOnInit(){
    this.imageService.images$.subscribe((images: Record<string, any>) => {
      this.images = Object.fromEntries(
        Object.entries(images).filter(([key]) => key.startsWith('ELLAS'))
      );
      this.imageKeys = Object.keys(this.images);
    });
  }
}
