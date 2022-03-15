import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ZadatakService } from 'src/app/services/atributi-zadataka-service/zadatak.service';


@Component({
  selector: 'app-zadatak-view',
  templateUrl: './zadatak-view.component.html',
  styleUrls: ['./zadatak-view.component.scss'],
})
export class ZadatakViewComponent implements OnInit {
 menuItems: MenuItem[] = [];

  form = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    naziv: new FormControl(null, [Validators.required]),
  });
  constructor(private FormBuilder: FormBuilder, public ZadatakService: ZadatakService, public router: Router) {}

  ngOnInit(): void {
    this.menuItems = [
      {label: 'Unos - Promjena Vrste Zadatka'}
  ];
  }
  onSave() {
    console.log(this.form.value);
    this.ZadatakService.add(this.form.value).subscribe((result) => {
      this.router.navigateByUrl('/atributi-zadataka');
    });
  }
}