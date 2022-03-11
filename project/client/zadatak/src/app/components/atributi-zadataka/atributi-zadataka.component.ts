import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZadatakService } from 'src/app/services/zadatak.service';

@Component({
  selector: 'app-atributi-zadataka',
  templateUrl: './atributi-zadataka.component.html',
  styleUrls: ['./atributi-zadataka.component.scss'],
})
export class AtributiZadatakaComponent implements OnInit {
  vrsta = [{}];
  /*  */
  atributi: any;
  @Input() searchText: any;

  _listFilter = '';

  isFiltered!: boolean;

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredAssignments = this.listFilter ? this.doFilter(this.listFilter) : this.assignments;
    /* console.log(this.isFiltered); */
  }

  filteredAssignments: any[] = [];
  assignments: any[] = [];

  doFilter(filterBy: string): any[] {
    this.isFiltered = true;
    filterBy = filterBy.toLocaleLowerCase();
    /* console.log(this.assignments.filter((game: any) => game.id.toLocaleLowerCase().indexOf(filterBy) !== -1)); */
    return this.assignments.filter((zadatak: any) => zadatak.id.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  /*  */
  constructor(private service: ZadatakService) {
    this.service.getAllAssignments().subscribe((atr: any) => {
      this.assignments = atr; 
    });
    this.filteredAssignments = this.assignments;
    this.listFilter = '';
    this.isFiltered = false;
  }

  ngOnInit(): void {
    this.vrsta = [
      {
        id: 'TSV-01',
        aktivan: true,
        naziv: 'Izrada dokumenta',
      },
      {
        id: 'TSV-02',
        aktivan: false,
        naziv: 'Kontakt stranke',
      },
      {
        id: 'TSV-03',
        aktivan: false,
        naziv: 'Organizacija sastanka',
      },
    ];

    this.service.getAllAssignments().subscribe((atr: any) => {
      this.atributi = atr;

      /* if(this.filterParam != null) */
      /* console.log(this.searchText); */

      /* console.log('Data:');
        console.log(this.atributi[0].aktivan); */
    });
  }

  /* editAssignment(assignment: any) {
    let route = '/atributi-zadataka/one/';
    this.router.navigate([route], { queryParams: { id: contact.id } });
  } */
}
