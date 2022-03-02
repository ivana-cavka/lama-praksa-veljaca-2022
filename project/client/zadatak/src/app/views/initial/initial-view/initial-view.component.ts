import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-initial-view',
  templateUrl: './initial-view.component.html',
  styleUrls: ['./initial-view.component.scss']
})
export class InitialViewComponent implements OnInit {
  navigationItems : MenuItem[] = [];

  constructor() { }

  /* ngOnInit(): void {
  } */

  ngOnInit(): void {
    this.navigationItems = [
      {label: "VRSTA PREDMETA"},
      {label: "TIP PREDMETA"},
      {label: "KLASIFIKACIJA PREDMETA"}
    ]
  }
}
