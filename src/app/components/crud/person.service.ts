import { Component, OnInit } from '@angular/core';
import { ObservableService2 } from '../../observable2.service';
import { Person } from '../../person';


@Component({
  selector: 'app-reqtypeservice',
  templateUrl: './reqtypeservice.component.html'
})
export class ReqtypeserviceComponent implements OnInit {

  public profileobj: any = { name: '', age: '', salary: '', id: '' };
  person: Person[];
  isadd: Boolean = true;
  isedit: boolean;
  constructor(private _observableservice2: ObservableService2) { }

  ngOnInit() {
    console.log("===========calling ngOnInit===========");
    this.listdata();
  }

  ngOnDestroy() {
    console.log("===========calling ngOnDestroy===========");
  }

  nfAfterViewInit() {
    console.log("===========calling nfAfterViewInit===========");
  }

  listdata() {
    this._observableservice2.getPersons().subscribe(resPersonsData => this.person = resPersonsData);
  }


  create(pers) {
    this._observableservice2.createperson(pers);
    setTimeout(() => { this.listdata(); this.profileobj = {}; this.person = null; }, 1000);
  }


  update(pers) {
    this._observableservice2.updateperson(pers);
    setTimeout(() => { this.listdata(); this.cancel(pers); this.profileobj = null; this.person = null; }, 1000);
  }


  delete(pers) {
    this._observableservice2.deleteperson(pers);
    setTimeout(() => this.listdata(), 1000);
  }


  cancel(pers) {
    this.isadd = true;
    this.isedit = false;
    this.profileobj = {};
    // $('.ng-dirty()').val('');
  }


  ShowEditPersonForm(person: Person) {
    this.isadd = false;
    this.isedit = true;
    this.profileobj = person;
  }

}
