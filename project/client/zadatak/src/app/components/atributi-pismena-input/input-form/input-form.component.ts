import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AtributiPismenaService } from 'src/app/services/atributi-pismena_service/atributi-pismena';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent implements OnInit {
  naziv: any;
  aktiv: any;
  checked: boolean = true;

  form = new FormGroup({
    naziv: new FormControl(null, [Validators.required]),
    checked: new FormControl(null, [Validators.required]),
    // id: new FormControl(null, [Validators.required]),
    // naziv: new FormControl(null, [Validators.required]),
  });
  constructor(private FormBuilder: FormBuilder, public AtributiPismenaService: AtributiPismenaService, public router: Router) {}

  ngOnInit(): void {
    // console.log(this.naziv);
    // this.form.reset({
    //   id: this.nova_stavka.id,
    //   naziv: this.nova_stavka.naziv,
    // });
    // console.log(this.form);
  }
  onSave() {
    console.log(this.form.value);
    this.AtributiPismenaService.insertRecords(this.form.value).subscribe((result) => {
      this.router.navigateByUrl('/');
    });
  }
}
