import { Component, OnInit, OnChanges, OnDestroy, Input, ViewChild, ElementRef, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { debounce } from 'src/app/util/debounce';
import { FilterService } from 'src/app/filter.service';
import { applyFilters, getCTXfilters } from 'src/assets/applyFilters';
import { FiltersState } from 'src/assets/initialFiltersState';

@Component({
  selector: 'app-img-display',
  templateUrl: './img-display.component.html',
  styleUrls: ['./img-display.component.css']
})
export class ImgDisplayComponent implements OnInit, OnChanges, OnDestroy {
  @Input() originalImgUrl: SafeUrl = "";
  @ViewChild('originalImg') originalImg!: ElementRef;
  @ViewChild('canvas') canvas!: ElementRef;
  @Output() passImgName2 = new EventEmitter<string>();
  @Output() passImgSrc2 = new EventEmitter<SafeUrl>();

  imgDisplayContainer?: HTMLElement | null;
  topBar?: HTMLElement | null;
  bottomBar?: HTMLElement | null;
  height: number = 0;
  width: number = 0;
  adjustedHeight: string = "";
  screenOrientation: MediaQueryList = window.matchMedia("(orientation: portrait)");

  passImgName = (event: string) => {
    this.passImgName2.emit(event);
  }

  passImgSrc = (event: SafeUrl) => {
    this.passImgSrc2.emit(event);
  }

  handleImgLoad = (): void => {
    URL.revokeObjectURL(this.originalImgUrl as string);
  }

  resize = (): void => {
    this.adjustedHeight = `calc(100vh - ${this.topBar?.clientHeight}px - ${this.bottomBar?.clientHeight}px)`;
    this.height = this.imgDisplayContainer!.clientHeight;
    this.width = this.imgDisplayContainer!.clientWidth;
  }

  debouncedResize = debounce(this.resize, 30);

  paintCanvas = (img: any, canvas: any, filters: FiltersState): void => {
    const ctx = canvas.getContext('2d');

    // Apply filters from Canvas 2D API:
    const ctxFilter = getCTXfilters(filters);
    ctx.filter = ctxFilter;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Apply additional filters:
    let pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    applyFilters(pixels, filters);
    ctx.putImageData(pixels, 0, 0);
  }

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
    this.imgDisplayContainer = document.getElementById("img-display-container");
    this.topBar = document.querySelector("app-upload");
    this.bottomBar = document.querySelector("app-download");

    window.addEventListener('resize', this.debouncedResize);
    this.screenOrientation.addEventListener("change", this.resize);

    this.filterService.filterSubject.subscribe({
      next: (filters: FiltersState) => {
        if (this.originalImgUrl) {
          this.paintCanvas(this.originalImg.nativeElement, this.canvas.nativeElement, filters);
        }
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    setTimeout(() => {
      const { originalImgUrl } = changes;
      if (originalImgUrl.currentValue && originalImgUrl.currentValue !== originalImgUrl.previousValue) {
        const baseCanvas = this.canvas.nativeElement;
        const baseImage = this.originalImg.nativeElement;
        [baseCanvas.width, baseCanvas.height] = [baseImage.width * 2.5, baseImage.height * 2.5]; // multiply to improve resolution
        this.paintCanvas(baseImage, baseCanvas, this.filterService.filters);
      }
    }, 100);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.debouncedResize);
    this.screenOrientation.removeEventListener("change", this.resize);
  }

}