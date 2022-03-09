import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-split-button',
  templateUrl: './split-button.component.html',
  styleUrls: ['./split-button.component.scss']
})
export class SplitButtonComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(private messageService: MessageService) { }

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

}
