import { Injectable } from '@angular/core';
import { FilterTypes, FiltersState, initialFiltersState } from 'src/assets/initialFiltersState';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filters: FiltersState = {...initialFiltersState};

  filterSubject = new Subject<FiltersState>();
  
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
    this.filterSubject.next(this.filters);
  }

  reset = (): void => {
    this.filters = {...initialFiltersState};
    this.filterSubject.next(this.filters);
  }
}