import { Routes } from '@angular/router';
import { TravelsComponent, travelGalleryMap } from './travels/travels.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './reusables/gallery/gallery.component';
import { PortfolioComponent, portfolioGalleryMap } from './portfolio/portfolio.component';

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
        data: { folderKey: travelGalleryMap['ireland'].key, galleryTitle: travelGalleryMap['ireland'].title }
    },
    {
        path: 'travels/greece',
        component: GalleryComponent,
        data: { folderKey: travelGalleryMap['greece'].key, galleryTitle: travelGalleryMap['greece'].title }
    },
    {
        path: 'travels/new-mexico',
        component: GalleryComponent,
        data: { folderKey: travelGalleryMap['new-mexico'].key, galleryTitle: travelGalleryMap['new-mexico'].title }
    },
    {
        path: 'travels/italy',
        component: GalleryComponent,
        data: { folderKey: travelGalleryMap['italy'].key, galleryTitle: travelGalleryMap['italy'].title }
    },
    {
        path: 'travels/north-carolina',
        component: GalleryComponent,
        data: { folderKey: travelGalleryMap['north-carolina'].key, galleryTitle: travelGalleryMap['north-carolina'].title }
    },
    {
        path: 'portfolio',
        component: PortfolioComponent
    },
    {
        path: 'portfolio/wisteria',
        component: GalleryComponent,
        data: { folderKey: portfolioGalleryMap['wisteria'].key, galleryTitle: portfolioGalleryMap['wisteria'].title }
    },
    {
        path: 'portfolio/thank-you-joel',
        component: GalleryComponent,
        data: { folderKey: portfolioGalleryMap['thank-you-joel'].key, galleryTitle: portfolioGalleryMap['thank-you-joel'].title }
    },
    {
        path: 'portfolio/leviathan',
        component: GalleryComponent,
        data: { folderKey: portfolioGalleryMap['leviathan'].key, galleryTitle: portfolioGalleryMap['leviathan'].title }
    },
    {
        path: 'portfolio/totems',
        component: GalleryComponent,
        data: { folderKey: portfolioGalleryMap['totems'].key, galleryTitle: portfolioGalleryMap['totems'].title }
    },
    {
        path: 'about',
        component: AboutComponent
    }
];
