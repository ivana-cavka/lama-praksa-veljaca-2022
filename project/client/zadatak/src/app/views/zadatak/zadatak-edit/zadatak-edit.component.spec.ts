import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZadatakEditComponent } from './zadatak-edit.component';

describe('ZadatakEditComponent', () => {
  let component: ZadatakEditComponent;
  let fixture: ComponentFixture<ZadatakEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZadatakEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZadatakEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
