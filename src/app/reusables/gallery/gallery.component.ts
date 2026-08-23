import { NgFor, NgOptimizedImage } from '@angular/common';
import { Component, Input, OnChanges, Optional, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { ImageService } from '../../services/image.service';
import { FullScreenPopupComponent } from '../full-screen-popup/full-screen-popup.component';

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
  imageWidths: number[] = [];

  constructor(
    private imageService: ImageService,
    private dialog: MatDialog,
    @Optional() private route?: ActivatedRoute
  ) { }

  ngOnInit() {
    this.syncRouteInputs();
    this.imageService.images$.subscribe((images: Record<string, any>) => {
      this.images = Object.fromEntries(
        Object.entries(images).filter(([key]) => key.startsWith(this.folderKey))
      );
      this.imageKeys = Object.keys(this.images);
      this.computeImageWidth();
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

  computeImageWidth() {
    this.imageWidths = [];
    for (let i = 0; i < this.imageKeys.length; i++) {
      this.imageWidths.push(Math.floor(Math.random() * 400) + 70);
    }
  }

  toFullScreen(imageKey: string) {
    const image = this.images[imageKey];
    if (!image) {
      return;
    }

    this.dialog.open(FullScreenPopupComponent, {
      data: {
        name: imageKey,
        imgSrc: 'assets/' + image.src
      },
      height: '90vh',
      width: 'fit-content',
      hasBackdrop: true
    });
  }
}
