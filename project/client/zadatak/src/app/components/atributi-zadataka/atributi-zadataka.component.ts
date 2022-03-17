import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ZadatakService } from 'src/app/services/atributi-zadataka-service/zadatak.service';
import { MenuItem, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-atributi-zadataka',
  templateUrl: './atributi-zadataka.component.html',
  styleUrls: ['./atributi-zadataka.component.scss'],
  providers: [MessageService],
})
export class AtributiZadatakaComponent implements OnInit {
  selectedVrsta: any;
  rememberSelected: any;
  vrsta: any[] = [];
  items: MenuItem[] = [];

  constructor(private service: ZadatakService, private messageService: MessageService, public router: Router, private route: ActivatedRoute) {
    this.service.getAll().subscribe((atr: any) => {
      this.vrsta = atr;
    });
  }

  ngOnInit(selected?: any): void {
    this.service.getAll().subscribe((atr: any) => {
      this.vrsta = atr;

      if (selected) {
        this.selectedVrsta = selected
      }
      else {
        var id: any;
        this.route.params.subscribe((params: Params) => id = params['selected']);
        this.selectedVrsta = this.vrsta.find((zadatak) => zadatak.id == id);
      }
      if (!this.selectedVrsta){
        this.selectedVrsta = this.vrsta[0];
      }
      
      this.rememberSelected = this.selectedVrsta;
      this.items = [
        {label: 'Dodaj', icon: 'pi pi-fw pi-plus', routerLink: '/atributi-zadataka/new'},
        {label: 'Uredi', icon: 'pi pi-fw pi-pencil', routerLink: ['/atributi-zadataka/edit', this.selectedVrsta.id]},
        {label: 'Obriši', icon: 'pi pi-fw pi-trash', command: () => {
          this.delete();}
        }
      ];
    });
  }
  
  delete(){
    this.service.delete(this.selectedVrsta.id).subscribe((result: any) => {
      this.router.navigateByUrl('/atributi-zadataka');
      this.ngOnInit();
    });
    
  }

  onRowSelect(){
    this.items = [
      {label: 'Dodaj', icon: 'pi pi-fw pi-plus', routerLink: '/atributi-zadataka/new'},
      {label: 'Uredi', icon: 'pi pi-fw pi-pencil', routerLink: ['/atributi-zadataka/edit', this.selectedVrsta.id]},
      {label: 'Obriši', icon: 'pi pi-fw pi-trash', command: () => {
        this.delete();}
      }
    ];
    this.rememberSelected = this.selectedVrsta;
  }

  onRowUnselect(){
    this.ngOnInit(this.rememberSelected);
  }
  
}
