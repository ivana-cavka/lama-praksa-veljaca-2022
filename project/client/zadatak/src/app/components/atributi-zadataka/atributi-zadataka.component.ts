import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZadatakService } from 'src/app/services/zadatak.service';

@Component({
  selector: 'app-atributi-zadataka',
  templateUrl: './atributi-zadataka.component.html',
  styleUrls: ['./atributi-zadataka.component.scss']
})
export class AtributiZadatakaComponent implements OnInit {
  vrsta=[{}]
  constructor() {}

  ngOnInit(): void {
    this.vrsta=[{
      id:'TSV-01',
      aktivan : true,
      naziv: 'Izrada dokumenta',
    },
    {
      id:'TSV-02',
      aktivan : false,
      naziv: 'Kontakt stranke',

    },{
      id:'TSV-03',
      aktivan : false,
      naziv: 'Organizacija sastanka',

    }]
  }

  /* editAssignment(assignment: any) {
    let route = '/atributi-zadataka/one/';
    this.router.navigate([route], { queryParams: { id: contact.id } });
  } */

}
