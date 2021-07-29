import { Component, OnInit } from '@angular/core';
import { AppService } from './app/app.service';
import { ObservableService } from './observable.service';
import * as $ from 'jquery';
import { DatePipe } from '@angular/common';
import { NgRedux } from 'ng2-redux';
import { IAppstate } from './store';
import { INCREMENT } from './actions';
import { Router } from '@angular/router';
// import RX from 'rxjs'
// import { PostService } from './post/post.service';
// import { PostListComponent } from './post/post-list.component';
// import {PostComponent} from './post/post.component'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Pipe, PipeTransform } from '@angular/core';
import { SortPipe } from './pipesdemo/arr.sort';
import { PipesdemoComponent } from './pipesdemo/pipesdemo.component';
import { AsyncPipe } from '@angular/common';
// import {HttpClient} from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { Person } from "./person";
import { State } from "./state";
import { clone } from "lodash";

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
  isshow: boolean = true;
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
    /* ,
   
    add:{   },

    edit:{   },

    delete:{   } */
  };


  // , private newservice1: PostService,  private newservice2: PostListComponent

  constructor(private newservice: AppService, private ngRedux: NgRedux<IAppstate>,
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
    // console.log(this.newservice.success());
    // console.log(this.newservice.obj);
    // console.log(this.newservice.fetchuserdata());

    // console.log( this.newservice1.getData());
    // console.log(this.newservice2.getPosts());

    // this._observableservice.getPersons().subscribe(resPersonsData => this.person = resPersonsData);

    // this._router.navigate(['/table']);
    // this.formsubmit();

    this.listdata();
    // this.getusers();
    // this.gethero();
    this.populatedata();
    // this.popdata();

  }

  formsubmit() {
    $("#form1").submit(function (event) {
      event.preventDefault();
      console.log("Inside submit");
      $("#form1").serialize();
      console.log(JSON.stringify($("#form1")));
      console.log($("#form1").serialize());
    });
  }

  onchange(id) {
    this._observableservice.onchange(id);
  }

  getusers() {
    this._observableservice.getusers().subscribe(resPersonsData => this.person = resPersonsData);
  }

  gethero() {
    this._observableservice.getHero().then(response => response.json().data as Person)
  }
  listdata() {
    this._observableservice.getPersons().subscribe(resPersonsData => this.person = resPersonsData);
  }

  popdata() {
    this._observableservice.popdata().then(response => this.pop_data = response);
    setTimeout(() => { console.log("pop_data==1==" + JSON.stringify(this.pop_data)); }, 1000);
  }

  populatedata() {
    let pop_data1 = this._observableservice.populatedata().subscribe(res => this.state = res);
    // let pop_data2 = this._observableservice.extractData(this.data);
    setTimeout(() => { console.log("populate_data==1==" + JSON.stringify(this.state)); }, 1000);
    // setTimeout(() => {console.log("populate_data==2=="+JSON.stringify(pop_data2));}, 1100);
  }
  /*update(pers) {
    this._observableservice.updateperson(pers);
   }*/

  add1(e) {
    e.preventDefault();
    console.log(JSON.stringify(e));
    console.log(e.serialize());
  }

  add(person1): void {
    console.log("Inside add ==========");
    this._observableservice.addperson(person1);
    setTimeout(() => {
      this.listdata();
      //  this.getusers();
      // this.gethero();
      $(".ng-dirty").val("");
    }, 1000);
  }


  delete(pers) {
    console.log("Inside delete ==========");
    this._observableservice.deleteperson(pers);
    setTimeout(() => this.listdata(), 1000);
  }

  /* getpersondata(){
    this._observableservice.getperson(pers);
  } */

  editnew(e) {
    this.toggleshoweditnew();
  }
  updaterow(e) {
    console.log("Inside Update ==========" + e);
  }

  edit(per) {
    console.log("per======" + JSON.stringify(per));
    this.toggleshowedit(per);
  }

  // callmodal1()
  /* callmodal(value){
    // loadpage = value;
      console.log("Inside modal call in app.component.ts")
  } */
}
