import { Component, OnInit, OnChanges, OnDestroy, Input, ViewChild, ElementRef, SimpleChanges } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { debounce } from '../../util/debounce';

@Component({
  selector: 'app-img-display',
  templateUrl: './img-display.component.html',
  styleUrls: ['./img-display.component.css']
})
export class ImgDisplayComponent implements OnInit, OnChanges, OnDestroy {
  @Input() originalImgUrl: SafeUrl = "";
  @ViewChild('originalImg') originalImg!: ElementRef;
  @ViewChild('canvas') canvas!: ElementRef;

  imgDisplayContainer?: HTMLElement | null;
  topBar?: HTMLElement | null;
  bottomBar?: HTMLElement | null;
  height: number = 0;
  width: number = 0;
  adjustedHeight: string = "";

  handleImgLoad = (): void => {
    URL.revokeObjectURL(this.originalImgUrl as string);
  }

  resize = (): void => {
    if (this.imgDisplayContainer!.clientHeight > this.imgDisplayContainer!.clientWidth) {
      this.adjustedHeight = `calc(100vh - ${this.topBar?.clientHeight}px - ${this.bottomBar?.clientHeight}px)`;
    }
    this.height = this.imgDisplayContainer!.clientHeight;
    this.width = this.imgDisplayContainer!.clientWidth;
  }

  debouncedResize = debounce(this.resize, 30);

  constructor() { }

  ngOnInit(): void {
    this.imgDisplayContainer = document.getElementById("img-display-container");
    this.topBar = document.querySelector("app-upload");
    this.bottomBar = document.querySelector("app-download");
    this.resize();
    window.addEventListener('resize', this.debouncedResize);
    window.addEventListener("orientationchange", this.resize);
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

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.debouncedResize);
    window.removeEventListener("orientationchange", this.resize);
  }

}
