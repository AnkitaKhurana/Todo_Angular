import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo-area',
  templateUrl: './todo-area.component.html',
  styleUrls: ['./todo-area.component.css']
})

export class TodoAreaComponent implements OnInit {
  constructor(private todos: Array<Object>) {
    todos = new Array();
  }
  ngOnInit() {
    this.todos  //GET TODOS FROM SERVICE
  }


}
