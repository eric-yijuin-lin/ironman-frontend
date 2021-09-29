import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IronmanUser } from './ironman/ironman.component';

@Injectable({
  providedIn: 'root'
})
export class IronmanService {

  apiUrl = 'https://mydomain.tw/api';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getUserList(): Observable<IronmanUser[]> {
    return this.http.get<IronmanUser[]>(`${this.apiUrl}/User`, this.httpOptions);
  }

  getUserDetail(id: number): Observable<IronmanUser> {
    return this.http.get<IronmanUser>(`${this.apiUrl}/User/${id}`, this.httpOptions);
  }

  addUser(userModel: IronmanUser): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/User`, userModel, this.httpOptions);
  }

  updateUser(userModel: IronmanUser): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/User/${userModel.userId}`, userModel, this.httpOptions);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/User/${id}`, this.httpOptions);
  }
}
