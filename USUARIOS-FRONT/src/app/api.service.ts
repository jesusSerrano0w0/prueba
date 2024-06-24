
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url='https://localhost:7264';
  constructor(private http: HttpClient) { }

    Get():Observable<any>{
      return this.http.get<any>(`${this.url}/api/Users`);
    }
    GetOne(data:any):Observable<any>{
      return this.http.get<any>(`${this.url}/api/Users/${data}`);
    }
    Post(data: any): Observable<any> {
      return this.http.post<any>(`${this.url}/api/Users`, data);
    }
    Put(id:any,data: any): Observable<any> {
      return this.http.put<any>(`${this.url}/api/Users/${id}`, data);
    }
    Delete(data: any): Observable<any> {
      return this.http.delete<any>(`${this.url}/api/Users/${data}`);
    }
}

