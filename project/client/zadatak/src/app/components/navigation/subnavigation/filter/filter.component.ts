import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZadatakService } from 'src/app/services/atributi-zadataka-service/zadatak.service';
/* interface Zadatak {
  id: string;
  aktivan: boolean;
  naziv: string;
} */

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  atributi: any;
  @Input() searchText: any;

  _listFilter = '';

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredAssignments = this.listFilter ? this.doFilter(this.listFilter) : this.assignments;
  }

  filteredAssignments: any[] = [];
  assignments: any[] = [];

  doFilter(filterBy: string): any[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.assignments.filter((game: any) => game.gameName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  constructor(private service: ZadatakService, private router: Router, private route: ActivatedRoute, private http: HttpClient) {
    this.filteredAssignments = this.assignments;
    this.listFilter = '';
  }

  /* search(filterParam: string): void {
    this.router.navigate([], { queryParams: { search: filterParam } });
  } */

  ngOnInit(): void {
    this.service.getAllAssignments().subscribe((atr: any) => {
      this.atributi = atr;

      /* if(this.filterParam != null) */
      console.log(this.searchText);

      /* console.log('Data:');
      console.log(this.atributi[0].aktivan); */
    });
  }
}
