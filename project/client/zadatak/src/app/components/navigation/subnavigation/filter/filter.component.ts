import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZadatakService } from 'src/app/services/zadatak.service';
interface Zadatak {
  id: string;
  aktivan: boolean;
  naziv: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() filterParam: any;
  filterBy: any;
  zadatci: Zadatak[] = [];

  constructor(private service: ZadatakService, private router: Router, private route: ActivatedRoute, private http: HttpClient) {}

  search(filterParam: string): void {
    this.router.navigate([], { queryParams: { search: filterParam } });
  }

  ngOnInit(): void {
    this.filterParam = this.route.snapshot.queryParams['search'];

    /* let all = this.service.getAllAssignments(); */



    /* const fs = require('fs');

    this.http.get<Zadatak[]>(JSON.parse(fs.readFileSync('project/server/server.js'))).subscribe((data: Zadatak[]) => {
      this.zadatci = data;
    }); */



    /*     all.forEach(function (value) { console.log(value); });
    all.forEach( (value) =>{ */
    /* if(value.toString.toUpperCase() == this.filterParam.toString){
        this.filterBy = value;
      } */
    /* console.log(value);
    }); */
  }
}
