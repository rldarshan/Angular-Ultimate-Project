import { Injectable } from '@angular/core';
import { Http, Response, HttpModule, } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import 'rxjs/add/operator/map';
import { Person } from "./person";
import { State } from "./state";
import { environment } from '../environments/environment';
@Injectable()

export class ObservableService {
    public person1 = new Person;
    public state1 = new State;
    public stateId: number;
    person = [];
    populate_data: string;
    private _url: string = environment.apiURL;
    // 'assets/persons.json';
    //    'https://jsonplaceholder.typicode.com/posts';
    // public populate_data:string[] = new Array(); 

    constructor(private _http: Http, private _httpmodule: HttpModule, private _httpclient: HttpClientModule) { }

    getPersons() {
        // return this._http.post(this._url, {requesttype:'listdata'}).map((res: Response) => res.json()); 
        return this._http.get(environment.apiURL).map((data: Response) => data.json()).catch(this.handleError);
    }

    getusers() {
        let post = { requesttype: 'listdata' };
        return this._http.post(this._url, JSON.stringify(post))
            // .subscribe(res => console.log("Listdata===="+JSON.stringify(res)));
            .map((data: Response) => data.json()).catch(this.handleError);
    }

    getHero(): Promise<any> {
        const url = environment.apiURL;
        return this._http.get(url)
            .toPromise()
            .then(response => response.json().data as Person)
            .catch(this.handleError);
    }


    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json() || 'server error');
    }


    updateperson(person3: Person) {
        let post = { requesttype: 'update', name: person3.name, age: person3.age, salary: person3.salary };
        this._http.post(this._url, JSON.stringify(post)).subscribe(res => {
            console.log("update============" + res.json());
        });
    }

    populatedata = function () {
        let post = { requesttype: 'populatedata' };
        return this._http.post(this._url, JSON.stringify(post))
            /* .subscribe((res:Response) => 
                {
                    console.log("populatedata==2=="+JSON.stringify(res));

                });  */
            .map(this.extractData).catch(this.handleError);
    }

    public extractData(res: Response) {
        res => {
            let body = res.json();
            console.log("body====" + JSON.stringify(body.populatestate));
            return body.data || {};
        }
    }

    popdata(): Promise<any> {
        let post = { requesttype: 'populatedata' };
        return this._http
            .get(this._url, JSON.stringify(post))
            //   .get(url)
            .toPromise()
            .then(response => response.json()).catch(this.handleError);
        //   .Map((data:Response) => data.json()).catch(this.handleError);

        /*  .then(response) => 
        {
            this.populate_data = JSON.stringify(res);
            console.log("populatedata===="+this.populate_data);
        }).catch(this.handleError); */

    }

    onchange(state1: State) {
        return this._http.post(this._url, { requesttype: 'onchange', state_id: state1.state_id }).subscribe(res => console.log("populatedata====" + res.json()));
    }

    addperson(person1: Person) {
        let post = { requesttype: 'add', name: person1.name, age: person1.age, salary: person1.salary };
        console.log("post in addperson========" + JSON.stringify(post));
        this._http.post(this._url, JSON.stringify(post))
            .subscribe(res => {
                console.log("Add response=====" + res.json());
            });
    }


    createperson(pers: Person) {
        const post = { requesttype: 'add', name: pers.name, id: '', age: pers.age, salary: pers.salary };
        console.log('post in add==' + JSON.stringify(post));
        this._http.post(this._url, JSON.stringify(post))
            .subscribe(res => {
                console.log('create person===' + JSON.stringify(post));
            });
    }

    deleteperson(person1: Person) {

        let body = { requesttype: 'delete', id: person1._id };

        this._http.post(this._url, JSON.stringify(body))
            .subscribe(res => {
                console.log(res.json());
                alert("User Delete Successfully...!");
            });


    }









    /* create(user: User) {
    return this._http.post('/users', user)
    .map(data => data.json()).toPromise();
    } */

    /* destroyperson(user: person) {
    return this._http.delete('/users/' + user._id).map(data => data.json()).toPromise();
    }*/


    getperson(person1: Person) {
        return this._http.get(this._url + person1._id).map(data => data.json()).toPromise();
    }
}