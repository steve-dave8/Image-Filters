import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { FiltersComponent } from './filters/filters.component';
import { CanvasComponent } from './canvas/canvas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadComponent } from './canvas/upload/upload.component';
import { DownloadComponent } from './canvas/download/download.component';
import { ImgDisplayComponent } from './canvas/img-display/img-display.component';
import { ImgDropboxComponent } from './canvas/img-display/img-dropbox/img-dropbox.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    CanvasComponent,
    UploadComponent,
    DownloadComponent,
    ImgDisplayComponent,
    ImgDropboxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTooltipModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
