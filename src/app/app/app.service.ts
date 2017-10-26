import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

 fetchuserdata()
 {
  //  this.http.get('assets/persons.json').subscribe(

  //   this.http.get('http://192.168.0.18:6040/springboot-ws-jpa/employee').subscribe(
  //    (data) => console.log(data)
  //  )
    console.log('Fech');
 }

    obj = { id:'1', name:'Darshu',  rollno:'17' }

    success()  {      return 'successful';    }

}
