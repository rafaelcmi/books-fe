import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuntoListaComponent } from './assunto-lista.component';

describe('AssuntoListaComponent', () => {
  let component: AssuntoListaComponent;
  let fixture: ComponentFixture<AssuntoListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssuntoListaComponent]
    });
    fixture = TestBed.createComponent(AssuntoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
