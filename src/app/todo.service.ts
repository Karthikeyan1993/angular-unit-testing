import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  readonly BASE_URL = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) { }

  getAllTodos = () => {
    return this.http.get(`${this.BASE_URL}todos`);
  }
}
