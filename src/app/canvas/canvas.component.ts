import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  originalImgUrl: SafeUrl = "";
  originalImgName: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
