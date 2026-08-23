import { Routes } from '@angular/router';
import { TravelsComponent, galleryMap } from './travels/travels.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'home',
        component: LandingPageComponent
    },
    {
        path: 'travels',
        component: TravelsComponent
    },
    {
        path: 'travels/ireland',
        component: GalleryComponent,
        data: { folderKey: galleryMap['ireland'].key, galleryTitle: galleryMap['ireland'].title }
    },
    {
        path: 'travels/greece',
        component: GalleryComponent,
        data: { folderKey: galleryMap['greece'].key, galleryTitle: galleryMap['greece'].title }
    },
    {
        path: 'travels/new-mexico',
        component: GalleryComponent,
        data: { folderKey: galleryMap['new-mexico'].key, galleryTitle: galleryMap['new-mexico'].title }
    },
    {
        path: 'travels/italy',
        component: GalleryComponent,
        data: { folderKey: galleryMap['italy'].key, galleryTitle: galleryMap['italy'].title }
    },
    {
        path: 'travels/north-carolina',
        component: GalleryComponent,
        data: { folderKey: galleryMap['north-carolina'].key, galleryTitle: galleryMap['north-carolina'].title }
    },
    {
        path: 'about',
        component: AboutComponent
    },
];
