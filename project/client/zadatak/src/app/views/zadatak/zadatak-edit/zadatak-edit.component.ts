import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';
import { ZadatakService } from 'src/app/services/atributi-zadataka-service/zadatak.service';

@Component({
  selector: 'app-zadatak-edit',
  templateUrl: './zadatak-edit.component.html',
  styleUrls: ['./zadatak-edit.component.scss']
})
export class ZadatakEditComponent implements OnInit {

  menuItems: MenuItem[] = [];
  zadatak: any;

  form = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    naziv: new FormControl(null, [Validators.required]),
  });
  constructor(private FormBuilder: FormBuilder, public service: ZadatakService, public router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.menuItems = [
      {label: 'Unos - Promjena Vrste Zadatka'}
    ];
    this.service.getAll().subscribe((atr: any) => {
      let vrsta = atr;
      let id = this.route.snapshot.paramMap.get('id');
      this.zadatak = vrsta.find((zadatak: any) => zadatak.id == id);
      this.form.reset({
        id: this.zadatak.id,
        naziv: this.zadatak.naziv,
      });
    });
  }

  onSave() {
    //this.form.value.id = this.zadatak.id;
    console.log(this.form.value);
    this.service.edit(this.form.value).subscribe((result) => {
      this.router.navigate(["/atributi-zadataka", this.zadatak.id]);
    });
  }

  onClose(){
    this.router.navigate(["/atributi-zadataka", this.zadatak.id]);
  }
}
