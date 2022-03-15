import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributiPredmetaFilterComponent } from './atributi-predmeta-filter.component';

describe('AtributiPredmetaFilterComponent', () => {
  let component: AtributiPredmetaFilterComponent;
  let fixture: ComponentFixture<AtributiPredmetaFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtributiPredmetaFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtributiPredmetaFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
