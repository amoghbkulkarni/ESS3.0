import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient)
   { }

   get(path: string, params: HttpParams): Observable<any> {
    
    return this.http.get(path);  
    ;  
  }
}  
  