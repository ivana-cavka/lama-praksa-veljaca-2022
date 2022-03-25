import { Component, OnInit } from '@angular/core';
import { AtributiPismenaService } from 'src/app/services/atributi-pismena_service/atributi-pismena';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';


@Component({
  selector: 'app-atributi-pismena',
  templateUrl: './atributi-pismena.component.html',
  styleUrls: ['./atributi-pismena.component.scss'],
  providers: [MessageService],
})
export class AtributiPismenaComponent implements OnInit {
  selectedVrsta: any;
  rememberSelected: any;
  vrsta: any[] = [];
  items: MenuItem[] = [];

  constructor(private service: AtributiPismenaService, private messageService: MessageService, public router: Router, private route: ActivatedRoute) {
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
        console.log(this.vrsta.find((zadatak) => zadatak.id == id));
        this.selectedVrsta = this.vrsta.find((zadatak) => zadatak.id == id);
      }
      if (!this.selectedVrsta){
        this.selectedVrsta = this.vrsta[0];
      }
      
      this.rememberSelected = this.selectedVrsta;
      this.items = [
        {label: 'Dodaj', icon: 'pi pi-fw pi-plus', routerLink: '/atributi-pismena/new'},
        {label: 'Uredi', icon: 'pi pi-fw pi-pencil', routerLink: ['/atributi-pismena/edit', this.selectedVrsta.id]},
        {label: 'Obriši', icon: 'pi pi-fw pi-trash', command: () => {
          this.delete();}
        }
      ];
    });
  }

  delete(){
    this.service.delete(this.selectedVrsta.id).subscribe((result: any) => {
      this.router.navigateByUrl('/atributi-pismena');
      this.ngOnInit();
    }); 
  }

  onRowSelect(){
    this.items = [
      {label: 'Dodaj', icon: 'pi pi-fw pi-plus', routerLink: '/atributi-pismena/new'},
      {label: 'Uredi', icon: 'pi pi-fw pi-pencil', routerLink: ['/atributi-pismena/edit', this.selectedVrsta.id]},
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