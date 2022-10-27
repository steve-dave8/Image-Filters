import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatDialog } from '@angular/material/dialog';
import { FilterService } from '../filter.service';
import { InfoModalComponent } from '../info-modal/info-modal.component';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion = {} as MatAccordion;

  constructor(public filterService: FilterService, public dialog: MatDialog) { }

  openInfoModal() {
    this.dialog.open(InfoModalComponent);
  }
}