import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http'
import { Observable, of, throwError } from 'rxjs';
import { user } from './_helpers/user';
import { environment } from '@environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor( private http: HttpClient) { }

    // Http Headers
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }



  register(user){
    return this.http.post(`${environment.apiUrl}/register`, user);
}
}
