import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  fetchuserdata() {
    //   this.http.get(environment.apiURL).subscribe(
    //    (data) => console.log(data)
    //  )
    console.log('Fech');
  }

  obj = { id: '1', name: 'Darshu', rollno: '17' }

  success() { return 'successful'; }

}
