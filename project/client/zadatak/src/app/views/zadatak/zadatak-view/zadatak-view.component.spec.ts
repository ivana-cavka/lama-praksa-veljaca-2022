import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZadatakViewComponent } from './zadatak-view.component';

describe('ZadatakViewComponent', () => {
  let component: ZadatakViewComponent;
  let fixture: ComponentFixture<ZadatakViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZadatakViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZadatakViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
