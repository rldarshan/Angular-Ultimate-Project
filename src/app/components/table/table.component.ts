import { Component } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  persondata = [];

  constructor(private http: Http) {
    var obj;
    this.getJSON().subscribe(res => this.persondata = res);
  }

  getJSON(): Observable<any> {
    return this.http.get("assets/persons.json").map((res: Response) => res.json());
  }

  members: any[] = [
    {
      "id": "1",
      "name": "Ruby",
      "url": "assets/1.jpg",
      "email": "ruby@yahoo.com"
    },

    {
      "id": "2",
      "name": "Mary",
      "url": "assets/2.jpg",
      "email": "mary@hotmail.com"
    },

    {
      "id": "3",
      "name": "Rosie",
      "url": "assets/3.jpg",
      "email": "rosie@yahoo.com"
    },

    {
      "id": "4",
      "name": "Shalini",
      "url": "assets/4.jpg",
      "email": "shalini@gmail.com"
    }
  ]

}
