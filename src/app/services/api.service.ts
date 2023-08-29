import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpHeaders: HttpHeaders | { [header: string]: string | string[]; } | undefined;

  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  headers = {
    "Authorization": "Bearer " + localStorage.getItem("token")
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
    })
    
  }

  // GET Datas
  GET(): Observable<any> {
    return this.http.get(`${this.apiUrl}/barchart`);
  }
  // Add 
  POST(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/barchart`, data);
  }
  // Delete
  deleteRecord(id: number): Observable<any> {
    const url = `${this.apiUrl}/barchart/${id}`; 
    return this.http.delete(url);
  }


}
