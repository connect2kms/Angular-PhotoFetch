import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { pluck } from 'rxjs';

interface PhotoURL {
  urls: {
    small: string;
    thumb: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http
      .get<PhotoURL>('https://api.unsplash.com/photos/random', {
        headers: {
          Authorization:
            'Client-ID tWvMLParu98NnY9NPUQeCeZNfEC6kDzrldMuhKDs3Wg',
        },
      })
      .pipe(pluck('urls'));
  }
}
