import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-atributi-predmeta-podatci',
  templateUrl: './atributi-predmeta-podatci.component.html',
  styleUrls: ['./atributi-predmeta-podatci.component.scss']
})
export class AtributiPredmetaPodatciComponent implements OnInit {

  items: MenuItem[] = [];

  @Input()
  selectedVrsta: any;
  @Input()
  selectedTip: any;
  @Input()
  selectedKlas: any;

  constructor() { }

  ngOnInit() {
    this.items = [
        {label: 'Dodaj', icon: 'pi pi-fw pi-plus', routerLink: '/atributi-predmeta/new'},
        {label: 'Uredi', icon: 'pi pi-fw pi-pencil'},
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
