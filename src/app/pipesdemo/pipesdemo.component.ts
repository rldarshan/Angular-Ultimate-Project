import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipesdemo',
  templateUrl: './pipesdemo.component.html',
  styleUrls: ['./pipesdemo.component.css']
})
export class PipesdemoComponent implements OnInit {
name = 'Angular';
day = new Date(1992, 3, 15);
arr = [4, 2, 5, 3, 1];
  constructor() { }

  ngOnInit() {}

}
 