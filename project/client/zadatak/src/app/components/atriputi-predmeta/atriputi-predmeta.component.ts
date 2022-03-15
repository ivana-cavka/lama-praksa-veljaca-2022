import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atriputi-predmeta',
  templateUrl: './atriputi-predmeta.component.html',
  styleUrls: ['./atriputi-predmeta.component.scss']
})
export class AtriputiPredmetaComponent implements OnInit {
  vrsta=[{}]
  tip=[{}]
  klas=[{}]

  selectedVrsta: any;
  selectedTip: any;
  selectedKlas: any;

  constructor() { }

  ngOnInit(): void {
    this.vrsta=[{
      id:'var-01',
      aktivan : true,
      naziv: 'test',

    }],
    this.tip=[{
      id:'trp-01',
      aktivan : true,
      naziv: 'test',
    }],
    this.klas=[{
      id:'koz-01',
      aktivan : true,
      naziv: 'test',
    }]
  }

}
