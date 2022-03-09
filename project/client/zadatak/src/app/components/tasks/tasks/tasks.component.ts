import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';
import { SplitButtonComponent } from '../../split-button/split-button/split-button.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
 // @Input() task: any;
  
  tasks: any[] = [];

  constructor(public service: TasksService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((tasks: any) => {
      this.tasks= tasks.arr;
      console.log("Data:")
      console.log(this.tasks)
    });
  }

}
