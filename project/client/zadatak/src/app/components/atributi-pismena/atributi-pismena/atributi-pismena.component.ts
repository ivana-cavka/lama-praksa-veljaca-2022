import { Component, OnInit } from '@angular/core';
import { AtributiPismenaService } from 'src/app/services/atributi-pismena_service/atributi-pismena';

@Component({
  selector: 'app-atributi-pismena',
  templateUrl: './atributi-pismena.component.html',
  styleUrls: ['./atributi-pismena.component.scss'],
})
export class AtributiPismenaComponent implements OnInit {
  atributi: any[] = [];
  constructor(public service: AtributiPismenaService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((atributi: any) => {
      this.atributi = atributi.arr;
      console.log('Data:');
      console.log(this.atributi);
      this.service.insertRecords(atributi);
    });
  }
}
