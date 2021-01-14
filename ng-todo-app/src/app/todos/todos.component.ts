import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  inputTodo: string;

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'first todo',
        completed: false
      },
      {
        content: 'second todo',
        completed: false
      }
    ]
  }

  addToDo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })

    this.inputTodo = '';
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo, index) => index !== id)
  }

  toggleCompleted(id: number) {
    this.todos.map((todo, index) => {
      if(index == id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
  }

}
