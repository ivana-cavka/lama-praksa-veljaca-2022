import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { ZadatakService } from 'src/app/services/zadatak.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zadatak-view',
  templateUrl: './zadatak-view.component.html',
  styleUrls: ['./zadatak-view.component.scss'],
})
export class ZadatakViewComponent implements OnInit {
  zadatak: any;
  menuItems: MenuItem[] = [];
  router!: Router;

  constructor(){}
  /* constructor(private zadatakServis: ZadatakService, public route: ActivatedRoute) {
    route.params.subscribe((params) => {
      console.log(params);
      zadatakServis.getAssignment({ id: +params['id'] }).subscribe(({ data }: any) => {
        this.zadatak = data;
      });
    });
  } */

  ngOnInit() {
      this.menuItems = [
          {label: 'Unos - Promjena Vrste Zadatka'}
      ];
  }

  /* close (){
    this.router.navigateByUrl('/atributi-zadataka');
  } */
}
