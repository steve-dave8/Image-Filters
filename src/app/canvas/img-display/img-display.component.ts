import { Component, OnInit, OnChanges, Input, ViewChild, ElementRef, SimpleChanges } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-img-display',
  templateUrl: './img-display.component.html',
  styleUrls: ['./img-display.component.css']
})
export class ImgDisplayComponent implements OnInit, OnChanges {
  @Input() originalImgUrl: SafeUrl = "";
  @ViewChild('originalImg') originalImg!: ElementRef;
  @ViewChild('canvas') canvas!: ElementRef;

  imgDisplayContainer?: HTMLElement | null;
  height?: number = 0;
  width?: number = 0;

  handleImgLoad = (): void => {
    URL.revokeObjectURL(this.originalImgUrl as string);
  }

  constructor() { }

  ngOnInit(): void {
    this.imgDisplayContainer = document.getElementById("img-display-container");
    this.height = this.imgDisplayContainer?.clientHeight;
    this.width = this.imgDisplayContainer?.clientWidth;
  }

  ngOnChanges(changes: SimpleChanges) {
    setTimeout(() => {
      const { originalImgUrl } = changes;
      if (originalImgUrl.currentValue && originalImgUrl.currentValue !== originalImgUrl.previousValue) {
        const baseCanvas = this.canvas.nativeElement;
        const ctx = baseCanvas.getContext('2d');
        const baseImage = this.originalImg.nativeElement;
        [baseCanvas.width, baseCanvas.height] = [baseImage.width * 2.5, baseImage.height * 2.5]; // multiply to improve resolution
        ctx?.drawImage(baseImage, 0, 0, baseCanvas.width, baseCanvas.height);
      }
    }, 100);
  }

}
