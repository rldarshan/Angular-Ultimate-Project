import { Component, OnInit } from '@angular/core';
// import { AsyncPipe } from '@angular/common';
// import { DatePipe } from '@angular/common';
// import { JsonPipe } from '@angular/common';
import { Observable, Subscriber } from 'rxjs';
@Component({
  selector: 'app-pipesdemo',
  templateUrl: './pipesdemo.component.html',
  styleUrls: ['./pipesdemo.component.css']
})
export class PipesdemoComponent implements OnInit {
name = 'Angular';
day = new Date(1992, 3, 15);
arr = [4, 2, 5, 3, 1];
time;
object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  constructor() { }

  ngOnInit() {
    this.time = new Observable<string>((observer: Subscriber<string>) => {
      setInterval(() => observer.next(new Date().toString()), 1000);
    });
  }

}
 