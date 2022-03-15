import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AtributiPredmetaService } from 'src/app/services/atributi-predmeta-service/atributi-predmeta-service.service';

@Component({
  selector: 'app-predmet-view',
  templateUrl: './predmet-view.component.html',
  styleUrls: ['./predmet-view.component.scss'],
})
export class PredmetViewComponent implements OnInit {
  menuItems: MenuItem[] = [];

  form = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    naziv: new FormControl(null, [Validators.required]),
  });
  constructor(private FormBuilder: FormBuilder, public AtributiPredmetaService: AtributiPredmetaService, public router: Router) {}

  ngOnInit(): void {
    this.menuItems = [{ label: 'Unos - Promjena Vrste Predmeta' }];
  }
  onSave() {
    console.log(this.form.value);
    this.AtributiPredmetaService.addPredmet(this.form.value).subscribe((result) => {
      this.router.navigateByUrl('/atributi-predmeti');
    });
  }
}
