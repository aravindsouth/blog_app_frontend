import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  getBlog() {
    // return this.http.get("http://localhost:3000");
    return this.http.get("https://blogapp-back.herokuapp.com");
  };
  getComments() {
    // return this.http.get("http://localhost:3000/comments");
    return this.http.get("https://blogapp-back.herokuapp.com/comments");
  };
}
