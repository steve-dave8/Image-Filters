import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion = {} as MatAccordion;

  constructor(public filterService: FilterService) { }
}