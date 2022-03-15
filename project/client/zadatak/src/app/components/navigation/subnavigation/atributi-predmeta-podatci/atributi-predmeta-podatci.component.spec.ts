import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributiPredmetaPodatciComponent } from './atributi-predmeta-podatci.component';

describe('AtributiPredmetaPodatciComponent', () => {
  let component: AtributiPredmetaPodatciComponent;
  let fixture: ComponentFixture<AtributiPredmetaPodatciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtributiPredmetaPodatciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtributiPredmetaPodatciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
