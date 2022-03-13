import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-split-button',
  templateUrl: './split-button.component.html',
  styleUrls: ['./split-button.component.scss']
})
export class SplitButtonComponent implements OnInit {
  @Input() tasks: any;
  items: MenuItem[] = [];

  constructor(private messageService: MessageService) { }

  form = new FormGroup({
    id: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    name: new FormControl(null, [Validators.required]),
    stavke: new FormArray([]),
  });

  ngOnInit(): void {
    this.items = [
      {label: 'Dodaj', icon: 'pi pi-plus', routerLink: ['/kategorija-edit']},
      {label: 'Uredi', icon: 'pi pi-pencil', command: () => {
        this.update();
      }},
      {label: 'Izbriši', icon: 'pi pi-times', command: () => {
        this.delete();
      }}
    ];

    this.form.reset({
      id: this.tasks.id,
      name: this.tasks.name,
    });

    this.tasks.stavke.map((stavka: any) => {
      (this.form.controls['stavke'] as FormArray).push(new FormGroup({ isCompleted: new FormControl(stavka.isCompleted, [Validators.required]), label: new FormControl(stavka.id, [Validators.required]) }));
    });
    console.log(this.tasks);
  }

  save(severity: string) {
    this.messageService.add({severity: severity, summary:'Success', detail:'Data Saved'});
  }

  update() {
    this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
  }

  delete() {
    this.messageService.add({severity:'success', summary:'Success', detail:'Data Deleted'});
  }

  get formArray(): FormArray {
    return this.form.controls['stavke'] as FormArray;
  }

  removeStavka(index: number) {
    this.formArray.removeAt(index);
  }

}
