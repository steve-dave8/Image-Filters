import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  @Output() newImgSrc = new EventEmitter<SafeUrl>();

  handleImgChange = (event: Event): void => {
    const input = (event.target as HTMLInputElement);
    if (input.files && input.files[0]) {
      const image = input.files[0];
      const isValid = image.type.match(/^(image\/).+/);
      if (isValid) {
        const imgSrc = URL.createObjectURL(image);
        this.newImgSrc.emit(this.sanitizer.bypassSecurityTrustUrl(imgSrc));
      }
    }
  };

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }
}
