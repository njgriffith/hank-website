import { Routes } from '@angular/router';
import { TravelsComponent } from './travels/travels.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IrelandComponent } from './travels/ireland/ireland.component';
import { GreeceComponent } from './travels/greece/greece.component';
import { NewMexicoComponent } from './travels/new-mexico/new-mexico.component';
import { ItalyComponent } from './travels/italy/italy.component';
import { NorthCarolinaComponent } from './travels/north-carolina/north-carolina.component';

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
        component: IrelandComponent
    },
    {
        path: 'travels/greece',
        component: GreeceComponent
    },
    {
        path: 'travels/new-mexico',
        component: NewMexicoComponent
    },
    {
        path: 'travels/italy',
        component: ItalyComponent
    },
    {
        path: 'travels/north-carolina',
        component: NorthCarolinaComponent
    }
];
