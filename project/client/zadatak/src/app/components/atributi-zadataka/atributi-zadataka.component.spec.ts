import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributiZadatakaComponent } from './atributi-zadataka.component';

describe('AtributiZadatakaComponent', () => {
  let component: AtributiZadatakaComponent;
  let fixture: ComponentFixture<AtributiZadatakaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtributiZadatakaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtributiZadatakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
