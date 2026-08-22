import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import images from '../../assets/image_dimensions.json';


@Injectable({
    providedIn: 'root',
})
export class ImageService {
    constructor() { }

    images: Record<string, any> = Object.fromEntries(
        Object.entries(images).map(([filename, dims]) => [
            filename,
            { src: filename, ...dims }
        ])
    );
    private imagesSubject = new BehaviorSubject<Record<string, any>>(this.images);
    images$: Observable<Record<string, any>> = this.imagesSubject.asObservable();
}
