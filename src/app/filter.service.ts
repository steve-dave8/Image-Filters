import { Injectable } from '@angular/core';
import { FilterTypes, FiltersState, initialFiltersState } from 'src/assets/initialFiltersState';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filters: FiltersState = initialFiltersState;
  
  updateFilter = (event: Event, property: string): void => {
    const input = (event.target as HTMLInputElement);
    let newValue: FilterTypes;

    if (input.type === "checkbox") {
      newValue = input.checked;
    } else {
      newValue = input.value;
      if (typeof this.filters[property] === "number" && typeof newValue === "string") {
        newValue = parseFloat(newValue);
      }
    }

    this.filters[property] = newValue;
  }
}