import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorListaComponent } from './autor-lista.component';

describe('AutorListaComponent', () => {
  let component: AutorListaComponent;
  let fixture: ComponentFixture<AutorListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutorListaComponent]
    });
    fixture = TestBed.createComponent(AutorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
