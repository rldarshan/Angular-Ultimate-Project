import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Person } from './person';
import { environment } from '../environments/environment';

@Injectable()

export class ObservableService2 {
    private _url = environment.apiURL;

    constructor(private _http: Http, private httpClient: HttpClientModule) { }

    person: Person[];

    getPersons() {
        return this._http.get(this._url).map((data: Response) => {
            return JSON.parse(data['_body']);
        });
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
}
