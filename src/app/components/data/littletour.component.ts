import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'little-tour',
  template: `
      <input #newHero
        (keyup.enter)="addHero(newHero.value)"
        (blur)="addHero(newHero.value); newHero.value='' ">
  
      <button type="button" value="add" style="padding: 4px 11px;" class="btn btn-success" (click)="addHero(newHero.value);"><i class="fa fa-plus-square"></i></button>
  
      <ul><li *ngFor="let hero of heroes">{{hero}}<button  style="padding: 4px 11px;" (click)="deleteHero()" class="btn btn-danger"><i class="fa fa-trash"></i></button></li></ul>
    `
})
//   onclick="this.parentNode.remove();"
export class LittleTourComponent {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    console.log(this.heroes);
    if (newHero) {
      this.heroes.push(newHero);
    }
  }

  deleteHero() {
    // if (delHero) {
    this.heroes.pop();
    // }
  }
}
