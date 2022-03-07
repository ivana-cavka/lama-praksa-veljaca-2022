import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  items:MenuItem[]=[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Knjige',
        items: [
          {
            label: '      '
          },
        ]
      },
      {
        label: 'Predmeti i pismena',
        items: [
          {
            label: '      '
          },
        ]
      },
      {
        label: 'Zadaci',
        items: [
          {
            label: '      '
          },
        ]
      },
      {
        label: 'Ovjere',
        items: [
          {
            label: '      '
          },
        ]
      },
      {
        label: 'Predmeti',
        items: [
          {
            label: '      '
          },
        ]
      },
      {
        label: 'Katalozi',
        items: [
          {
            label: 'Poslovni partneri'
          },
          {
            label: 'Atributi predmeta' , routerLink: 'atributi-predmeti'
          },
          {
            label: 'Atributi pismena'
          },
          {
            label: 'Atributi zadataka', routerLink: 'atributi-zadataka'
          },
          {
            label: 'Klasifikacijske oznake'
          },
          {
            label: 'Ustrojstvene jedinice'
          },
          {
            label: 'Konfiguracija'
          },
          {
            label: 'E-računi'
          },
          {
            label: 'Opći katalozi'
          },
          {
            label: 'Sigurnost'
          },
        ]
      },
      {
        label: 'Alati',
        items: [
          {
            label: '      '
          },
        ]
      },
      {
        label: 'Pomoć',
        items: [
          {
            label: '      '
          },
        ]
      },
    ];
  }

}
