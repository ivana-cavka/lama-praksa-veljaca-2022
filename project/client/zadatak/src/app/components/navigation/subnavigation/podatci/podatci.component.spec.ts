import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodatciComponent } from './podatci.component';

describe('PodatciComponent', () => {
  let component: PodatciComponent;
  let fixture: ComponentFixture<PodatciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodatciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodatciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
