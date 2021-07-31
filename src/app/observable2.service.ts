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
        const post = { requesttype: 'update', id: person._id, name: person.name, age: person.age, salary: person.salary };

        return this._http.post(this._url, JSON.stringify(post));
    }


    createperson(data: Person) {
        const payload = { data };
        return this._http.post(this._url, payload);
    }


    deleteperson(person: Person) {
        // const post = { requesttype: 'delete', id: person1._id };

        return this._http.delete(`${this._url}?_id=${person._id}`).map((data: Response) => {
            return JSON.parse(data['_body']);
        });
    }
}
