import { Component } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { NgFor, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-ireland',
  standalone: true,
  imports: [NgFor, NgOptimizedImage],
  templateUrl: './ireland.component.html',
  styleUrl: './ireland.component.css'
})
export class IrelandComponent {
  constructor(private imageService: ImageService){}
  images: Record<string, any> = {};
  imageKeys: string[] = [];
  
  ngOnInit(){
    this.imageService.images$.subscribe((images: Record<string, any>) => {
      this.images = Object.fromEntries(
        Object.entries(images).filter(([key]) => key.startsWith('Ireland'))
      );
      this.imageKeys = Object.keys(this.images);
    });
  }
 
}
