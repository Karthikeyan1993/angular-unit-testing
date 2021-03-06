import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos = [];
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getAllTodos().subscribe((response: any[]) => {
      this.todos = response;
    });
  }

}
