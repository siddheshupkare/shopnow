import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  postData(userData: any)
  {
    return this.http.post("http://localhost:3000/form",userData)
  }
}
