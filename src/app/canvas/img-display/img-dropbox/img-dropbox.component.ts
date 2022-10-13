import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-img-dropbox',
  templateUrl: './img-dropbox.component.html',
  styleUrls: ['./img-dropbox.component.css']
})
export class ImgDropboxComponent implements OnInit {
  @ViewChild('imgDropbox') imgDropbox!: ElementRef;
  @Output() imgDrop = new EventEmitter<SafeUrl>();
  @Output() newImgName = new EventEmitter<string>();

  handleDragOver = (event: DragEvent): void => {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer!.dropEffect = "copy";
    const { items } = event.dataTransfer!;
    if (items.length !== 1 || !items[0].type.match(/^(image\/).+/)) {
      this.imgDropbox.nativeElement.classList.add("no-drop");
    } else {
      this.imgDropbox.nativeElement.classList.add("droppable");
    }
  };

  handleDragLeave = () => {
    this.imgDropbox.nativeElement.classList.remove("no-drop", "droppable");
  }

  handleDrop = (event: DragEvent): void => {
    event.stopPropagation();
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files && files.length === 1 && files[0] && files[0].type.match(/^(image\/).+/)) {
      const image = files[0];
      const imgName = image.name.replace(/(\.[a-zA-Z]+)$/, ""); // removes file extension
      this.newImgName.emit(imgName);
      const imgSrc = URL.createObjectURL(image);
      this.imgDrop.emit(this.sanitizer.bypassSecurityTrustUrl(imgSrc));
    } else {
      this.imgDropbox.nativeElement.classList.remove("no-drop", "droppable");
    }
  };

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}