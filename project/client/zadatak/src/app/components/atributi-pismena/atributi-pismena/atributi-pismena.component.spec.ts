import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributiPismenaComponent } from './atributi-pismena.component';

describe('AtributiPismenaComponent', () => {
  let component: AtributiPismenaComponent;
  let fixture: ComponentFixture<AtributiPismenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtributiPismenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtributiPismenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
