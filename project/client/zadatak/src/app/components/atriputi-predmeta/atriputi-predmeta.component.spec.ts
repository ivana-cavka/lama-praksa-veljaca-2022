import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtriputiPredmetaComponent } from './atriputi-predmeta.component';

describe('AtriputiPredmetaComponent', () => {
  let component: AtriputiPredmetaComponent;
  let fixture: ComponentFixture<AtriputiPredmetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtriputiPredmetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtriputiPredmetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
