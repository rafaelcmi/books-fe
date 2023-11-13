import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuntoCadastroComponent } from './assunto-cadastro.component';

describe('AssuntoCadastroComponent', () => {
  let component: AssuntoCadastroComponent;
  let fixture: ComponentFixture<AssuntoCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssuntoCadastroComponent]
    });
    fixture = TestBed.createComponent(AssuntoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
