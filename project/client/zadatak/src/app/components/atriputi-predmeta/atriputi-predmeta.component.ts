import { Component, OnInit } from '@angular/core';
import { AtributiPredmetaService } from 'src/app/services/atributi-predmeta-service/atributi-predmeta-service.service';

@Component({
  selector: 'app-atriputi-predmeta',
  templateUrl: './atriputi-predmeta.component.html',
  styleUrls: ['./atriputi-predmeta.component.scss'],
})
export class AtriputiPredmetaComponent implements OnInit {
  vrsta = [{}];
  tip = [{}];
  klas = [{}];

  selectedVrsta: any;
  selectedTip: any;
  selectedKlas: any;

  constructor(private service: AtributiPredmetaService) {
    this.service.getAll().subscribe((atr: any) => {
      this.vrsta = atr.vrsta;
      this.tip = atr.tip;
      this.klas = atr.klas;
    });
  }

  ngOnInit(): void {}
}
