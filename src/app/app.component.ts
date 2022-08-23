import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMenu: boolean = false;
  
  toggleMenu(event: Event): void {
    let menuBtnClasses = (event.target as HTMLInputElement).classList;
    if (menuBtnClasses.contains("spin-close")) {
      menuBtnClasses.remove("spin-close");
      menuBtnClasses.add("spin-open");
    } 
    else if (menuBtnClasses.contains("spin-open")) {
      menuBtnClasses.remove("spin-open");
      menuBtnClasses.add("spin-close");
    } 
    else {
      menuBtnClasses.add("spin-open");
    }
    this.showMenu = !this.showMenu;
  }

}
