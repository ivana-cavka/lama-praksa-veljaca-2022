import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';
import { SplitButtonComponent } from '../../split-button/split-button/split-button.component';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  providers:[MessageService]
})
export class TasksComponent implements OnInit {
 // @Input() task: any;
  //tasks: any;
  tasks: any[] = [];
  selectedTask: any;
  items: MenuItem[] = [];

  constructor(public service: TasksService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((tasks: any) => {
      this.tasks= tasks.arr;
      console.log("Data:")
      console.log(this.tasks)
    });

    this.items = [
      {label: 'Dodaj', icon: 'pi pi-plus', routerLink: ['/kategorija-edit']},
      {label: 'Uredi', icon: 'pi pi-pencil', command: () => {
        this.update();
      }},
      {label: 'Izbriši', icon: 'pi pi-times', command: () => {
        this.delete();
      }}
    ];
  }

  update() {
    
  }

  getToBeRemoved() {
    
  }

//removeObj()

  delete() {
    this.tasks.find(element => element.name = this.selectedTask.name)
    console.log(this.tasks.find(element => element.name = this.selectedTask.name))
    //this.tasks.remove(this.selectedTask.);
  }
//find - vrati prvi rez
}
