import { Component, OnInit } from '@angular/core';
import { ObservableService2 } from '../../observable2.service';
import { Person } from '../../person';

@Component({
  selector: 'app-reqtypeservice',
  templateUrl: './reqtypeservice.component.html'
})
export class personCrudComponent implements OnInit {

  private profileobj: any = { name: '', age: '', salary: '' };
  person: Person[];
  isadd: Boolean = true;
  isedit: boolean;
  constructor(private _observableservice2: ObservableService2) { }

  ngOnInit() {
    this.listdata();
  }


  listdata() {
    console.log("=======   Fetching  all  details from DB   =====");

    this._observableservice2.getPersons().subscribe(data => {
      this.person = data['data'];
    });
  }


  create(pers) {
    pers._id = Math.floor(Math.random() * 100000);

    this._observableservice2.createperson(pers).subscribe(res => {
      if (res.status == 200) {
        // this.person.push(pers);
        this.listdata();
        alert('User Data Added Successfilly...!');
        this.profileobj = {};
      }
    });
  }


  update(pers) {
    this._observableservice2.updateperson(pers);
    // setTimeout(() => { this.listdata(); this.cancel(pers); this.profileobj = null; this.person = null; }, 1000);
  }


  delete(pers) {
    this._observableservice2.deleteperson(pers).subscribe(res => {
      if (res.status != 400) {
        this.person = this.person.filter((item, index) => {
          if (pers['_id'] != item._id) {
            return item;
          }
        })
      }
    });
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
