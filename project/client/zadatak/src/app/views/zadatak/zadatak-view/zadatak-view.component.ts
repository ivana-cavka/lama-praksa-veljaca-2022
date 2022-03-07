import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZadatakService } from 'src/app/services/zadatak.service';

@Component({
  selector: 'app-zadatak-view',
  templateUrl: './zadatak-view.component.html',
  styleUrls: ['./zadatak-view.component.scss'],
})
export class ZadatakViewComponent implements OnInit {
  zadatak: any;

  constructor(){}
  /* constructor(private zadatakServis: ZadatakService, public route: ActivatedRoute) {
    route.params.subscribe((params) => {
      console.log(params);
      zadatakServis.getAssignment({ id: +params['id'] }).subscribe(({ data }: any) => {
        this.zadatak = data;
      });
    });
  } */
  ngOnInit() {}
}
