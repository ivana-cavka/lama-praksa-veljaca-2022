import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZadatakService } from 'src/app/services/zadatak.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {

  @Input() filterParam: any;
  @Input() isSearchResult: boolean = false;
  constructor(
    private service: ZadatakService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  search(filterParam: string): void {
    this.router.navigate([], {queryParams: {search: filterParam}});
  }

  ngOnInit(): void {
    this.filterParam = this.route.snapshot.queryParams['search'];

    let all = this.service.getAllAssignments();
    /* for(let a in all){
      if(a.)
    } */
    all.forEach(function (value) { console.log(value); });
  }
}
