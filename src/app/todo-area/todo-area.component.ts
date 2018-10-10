import { Component, OnInit, Optional } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';


@Component({
  selector: 'app-todo-area',
  templateUrl: './todo-area.component.html',
  styleUrls: ['./todo-area.component.css']
})

export class TodoAreaComponent implements OnInit {
  private todos: Todo[];

  constructor(private todoService: TodoService) {
    
  }
  ngOnInit() {
    this.todos =this.todoService.getTodos()//todos =>
      
  }
}
