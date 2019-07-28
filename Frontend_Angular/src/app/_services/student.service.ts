import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../_helpers';
import { Observable, throwError, from } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '@environments/environment';
@Injectable({
  providedIn: 'root'
})

export class StudentService {
  
  // Define API
  //apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch employees list
  getAllStudents(): Observable<Student> {
    return this.http.get<Student>(`${environment.apiUrl}/students`)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch employee
  getStudentById(studentid): Observable<Student> {
    return this.http.get<Student>(`${environment.apiUrl}/students/${studentid}`)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create employee
  AddStudent(Student): Observable<Student> {
    return this.http.post<Student>(`${environment.apiUrl}/students`, JSON.stringify(Student), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API put() method => Update employee
  updateStudent(studentid, Student): Observable<Student> {
    return this.http.put<Student>(`${environment.apiUrl}/students/${studentid}`, JSON.stringify(Student), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete employee
  deleteStudent(studentid){
    return this.http.delete<Student>(`${environment.apiUrl}/students/${studentid}`, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}

