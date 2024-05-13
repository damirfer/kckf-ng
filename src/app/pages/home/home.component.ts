import { Component } from '@angular/core';
import { ITodo } from 'src/app/models/ITodo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  todoList: ITodo[] = [
    {
      "id": 1,
      "task": "Buy groceries",
      "description": "Milk, eggs, bread, vegetables",
      "dueDate": "2024-05-15",
      "priority": "High",
      "completed": false
    },
    {
      "id": 2,
      "task": "Finish homework",
      "description": "Complete math assignment",
      "dueDate": "2024-05-13",
      "priority": "Medium",
      "completed": false
    },
    {
      "id": 3,
      "task": "Call mom",
      "description": "Wish her happy birthday",
      "dueDate": "2024-05-12",
      "priority": "Low",
      "completed": false
    },
    {
      "id": 4,
      "task": "Go for a run",
      "description": "Run for 30 minutes",
      "dueDate": "2024-05-12",
      "priority": "Medium",
      "completed": false
    },
    {
      "id": 5,
      "task": "Clean the house",
      "description": "Vacuum, mop floors, clean windows",
      "dueDate": "2024-05-12",
      "priority": "High",
      "completed": false
    }
  ]
  showTable = true
  
}
