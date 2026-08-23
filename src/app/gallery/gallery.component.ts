import { NgFor, NgOptimizedImage } from '@angular/common';
import { Component, Input, OnChanges, Optional, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor, NgOptimizedImage],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnChanges {
  @Input() folderKey: string = '';
  @Input() galleryTitle: string = '';
  images: Record<string, any> = {};
  imageKeys: string[] = [];

  constructor(
    private imageService: ImageService,
    @Optional() private route?: ActivatedRoute
  ) { }

  ngOnInit() {
    this.syncRouteInputs();
    this.imageService.images$.subscribe((images: Record<string, any>) => {
      this.images = Object.fromEntries(
        Object.entries(images).filter(([key]) => key.startsWith(this.folderKey))
      );
      this.imageKeys = Object.keys(this.images);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['folderKey'] || changes['galleryTitle']) {
      this.syncRouteInputs();
    }
  }

  private syncRouteInputs() {
    if (!this.route) {
      return;
    }

    const routeData = this.route.snapshot.data as { folderKey?: string; galleryTitle?: string };

    if (!this.folderKey && routeData.folderKey) {
      this.folderKey = routeData.folderKey;
    }

    if (!this.galleryTitle && routeData.galleryTitle) {
      this.galleryTitle = routeData.galleryTitle;
    }
  }

  toFullScreen(){
    
  }
}
