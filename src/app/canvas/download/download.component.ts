import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent {
  @ViewChild('downloadLink') downloadLink!: ElementRef;
  downloadName: string = "filtered-img.png";
  newImgNumber: number = 0;
  filteredImgSrc: string = "";

  download = (): void => {
    const currentCanvas = document.querySelector("canvas");
    if (!currentCanvas) return;

    this.filteredImgSrc = currentCanvas.toDataURL("image/png");
    if (this.newImgNumber > 0) {
      this.downloadName = `filtered-img-${this.newImgNumber}.png`;
    }
    this.newImgNumber += 1;

    // Use timeout to make sure anchor element has the latest property bindings:
    setTimeout(() => {
      this.downloadLink.nativeElement.click();
    }, 0);
  }

  constructor() { }
}
