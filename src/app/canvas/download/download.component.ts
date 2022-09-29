import { Component, ViewChild, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnChanges {
  @Input() originalImgName: string = "";
  @ViewChild('downloadLink') downloadLink!: ElementRef;
  downloadName: string = "filtered-img.png";
  newImgNumber: number = 0;
  filteredImgSrc: string = "";

  download = (): void => {
    if (!this.originalImgName) return;
    const currentCanvas = document.querySelector("canvas");
    this.filteredImgSrc = currentCanvas!.toDataURL("image/png");
    const numString = this.newImgNumber ? `-${this.newImgNumber}` : "";
    this.downloadName = `${this.originalImgName}--filtered${numString}.png`;
    this.newImgNumber += 1;

    // Use timeout to make sure anchor element has the latest property bindings:
    setTimeout(() => {
      this.downloadLink.nativeElement.click();
    }, 0);
  }

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const { originalImgName } = changes;
    if (originalImgName.currentValue !== originalImgName.previousValue) {
      this.newImgNumber = 0;
    }
  }
}
