import { Injectable, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subscriber } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Person } from './person';
@Injectable()

export class ObservableService2 {
    private _url = 'http://192.168.0.18:6040/springboot-ws-jpa/employee';
    constructor(private _http: Http) { }

    person: Person[];

    getPersons() {
        return this._http.get('http://192.168.0.18:6040/springboot-ws-jpa/employee-list').map((data: Response) => data.json());
    }

    updateperson(person: Person) {
        const post = { requesttype: 'update', id: person.id, name: person.name, age: person.age, salary: person.salary };
        console.log('updateperson  id ====' + person.id);
        this._http.post(this._url, JSON.stringify(post)).subscribe(res => {
            console.log(res.json());
        });
    }


    createperson(pers: Person) {
        const post = { requesttype: 'add', name: pers.name, id: pers.id, age: pers.age, salary: pers.salary };
        console.log('post in add==' + JSON.stringify(post));
        this._http.post(this._url, JSON.stringify(post))
            .subscribe(res => {
                console.log('create person===' + JSON.stringify(res));
            });
    }


    deleteperson(person1: Person) {
        console.log('deleteperson  id =============' + person1.id);
        const post = { requesttype: 'delete', id: person1.id };
        this._http.post(this._url, JSON.stringify(post)).subscribe(
            res => {
                console.log('deleted successfully' + JSON.stringify(post));
            });
    }



    // populatestates(person) {
    //     const post = {requesttype : 'populatedata'};
    //     this._http.post(this._url, JSON.stringify(post)).subscribe(
    //         res => {
    //             console.log('populatestates============'+JSON.stringify(post));
    //         });
    //            }

}
