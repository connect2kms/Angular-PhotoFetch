import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit {
  imageURL: string = '';

  constructor(private fetchService: FetchService) {}

  getImage() {
    this.fetchService.getPhoto().subscribe((urls) => {
      this.imageURL = urls.thumb;
    });
  }

  ngOnInit(): void {}
}
