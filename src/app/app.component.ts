import { Component, OnInit } from '@angular/core';
import { ObservableService } from './observable.service';
import * as $ from 'jquery';

import { NgRedux } from 'ng2-redux';
import { IAppstate } from './store';
import { INCREMENT } from './actions';
import { Router } from '@angular/router';

import { Person } from "./person";
import { State } from "./state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // directives: <any>[PostComponent]
  // providers:[]
})

/* export class AsyncObservablePipeComponent {
  time = new Observable<string>((observer: Subscriber<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
} */

export class AppComponent implements OnInit {
  title = 'app';
  isshow: boolean = false;
  isedit: boolean = false;
  iseditnew: boolean = false;
  loadpage = '<h3>loading....</h3>';
  color: any;

  private chart: any;
  public profileobj: any = { name: '', age: '', salary: '', requesttype: '' };
  public person1 = new Person;
  public person2 = new Person;
  public person3 = new Person;
  public state = new State;

  person = [];
  pop_data = [];
  time;
  data;
  counter = 0;

  settings = {
    // mode:'external',
    editable: 'false',
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Name'
      },
      age: {
        title: 'Age'
      },
      salary: {
        title: 'Salary'
      }
    }
  };


  // , private newservice1: PostService,  private newservice2: PostListComponent

  constructor(private ngRedux: NgRedux<IAppstate>,
    private _observableservice: ObservableService, private _router: Router) { }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }

  toggleshow() {
    this.isshow = !this.isshow;
  }

  toggleshowedit(per) {
    this.isedit = !this.isedit;
    this.person3 = per;
    console.log("person3======" + JSON.stringify(this.person));
  }

  toggleshoweditnew() {
    this.iseditnew = !this.iseditnew;
  }
  ngOnInit() {

  }

  // formsubmit() {
  //   $("#form1").submit(function (event) {
  //     event.preventDefault();
  //     console.log("Inside submit");
  //     $("#form1").serialize();
  //     console.log(JSON.stringify($("#form1")));
  //     console.log($("#form1").serialize());
  //   });
  // }

}
