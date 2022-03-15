import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetViewComponent } from './predmet-view.component';

describe('PredmetViewComponent', () => {
  let component: PredmetViewComponent;
  let fixture: ComponentFixture<PredmetViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredmetViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
