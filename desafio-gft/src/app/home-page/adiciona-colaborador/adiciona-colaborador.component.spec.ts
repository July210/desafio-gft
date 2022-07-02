import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionaColaboradorComponent } from './adiciona-colaborador.component';

describe('AdicionaColaboradorComponent', () => {
  let component: AdicionaColaboradorComponent;
  let fixture: ComponentFixture<AdicionaColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionaColaboradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionaColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
