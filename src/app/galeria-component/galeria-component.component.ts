import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'galeria-component',
  templateUrl: './galeria-component.component.html',
  styleUrls: ['./galeria-component.component.css']
})
export class GaleriaComponentComponent {

  @Input() title: string = '';
  @Input() photos: string[] = []

  currentImage: number = 0;

  next() {
    this.currentImage++;   
  }

  back() {
    this.currentImage--;
  }

  firstImage() {
    this.currentImage = 0;
  }

  lastImage() {
    this.currentImage = this.photos.length - 1;
  }
}
