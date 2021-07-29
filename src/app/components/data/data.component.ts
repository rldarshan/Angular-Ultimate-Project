import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-data',
  styleUrls: ['./data.component.css'],
  templateUrl: './data.component.html'
})
export class DataComponent implements OnInit {
  colorFlag: string;
  isSmall: boolean = true;
  small: number;
  big: number;
  isBackgroundRed: boolean;
  mystyle: any;
  colorName = 'red';

  constructor(private _router: Router) { }

  onBack(): void {
    this._router.navigate(['/table']);
  }

  ngOnInit() {
    this.getMyStyles();

    /*  $('[data-toggle="modal"]').click(function(){
       setTimeout(function(){
        console.log("Inside data.component.ts\nthis==="+this);
       },200);
     }); */

  }

  ngstyle() {
    // this.colorFlag = 'yellow';
    // this.isSmall = false;
    // this.small = 10;
    // this.big = 20;
    // console.log("inside ngstyle");
    // this.getMyStyles();

    this.mystyle = { 'color': 'red' };
  }


  getMyStyles() {
    let myStyles = {
      'color': 'red'
      //  'color': this.colorFlag ? 'yellow' : 'black',
      //  'font-size.em': this.isSmall ? this.small/5 : this.big/5,
      //  'background-image': !this.isBackgroundRed ? 'url(\'images/red.gif\')' : 'url(\'images/green.gif\')'
    };
    console.log('Inside getmystyle');
    return myStyles;
  }
  callmodal(val) {
    console.log('value====' + val);
    // let myContainer = <HTMLElement> document.querySelector(".modal-body");
    // myContainer.innerHTML = val;

    // document.getElementsByClassName('modal-body').innerText = value; 
    // console.log(myContainer.innerHTML)
  }

  onkeyup() { console.log('key up called'); }

  ontab() { console.log("Tab Entered") }
}


