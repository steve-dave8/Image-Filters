import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Input() showFilterMenu: boolean = false;

  @ViewChild(MatAccordion) accordion: MatAccordion = {} as MatAccordion;

  constructor(public filterService: FilterService) { }

  ngOnInit(): void {
  }

}
