import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-podatci',
  templateUrl: './podatci.component.html',
  styleUrls: ['./podatci.component.scss']
})
export class PodatciComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.items = [
        {label: 'Dodaj', icon: 'pi pi-fw pi-plus', routerLink: '/atributi-zadataka/new'},
        {label: 'Uredi', icon: 'pi pi-fw pi-pencil', routerLink: '/atributi-zadataka/new'},
        {label: 'Obriši', icon: 'pi pi-fw pi-trash', command: () => {
          this.delete();}
        }
    ];
  }

  log(item: any){
    //console.log("Data:");
    console.log(item);
  }

  delete(){
  }
}
