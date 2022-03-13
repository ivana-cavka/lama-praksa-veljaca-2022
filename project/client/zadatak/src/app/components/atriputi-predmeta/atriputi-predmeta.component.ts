import { SplitButtonComponent } from '../split-button/split-button/split-button.component';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atriputi-predmeta',
  templateUrl: './atriputi-predmeta.component.html',
  styleUrls: ['./atriputi-predmeta.component.scss'],
  providers:[MessageService]
})
export class AtriputiPredmetaComponent implements OnInit {
  vrsta=[{}]
  tip=[{}]
  klas=[{}]
  selectedTask: any;
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
