import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportListaComponent } from './report-lista.component';

describe('ReportListaComponent', () => {
  let component: ReportListaComponent;
  let fixture: ComponentFixture<ReportListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportListaComponent]
    });
    fixture = TestBed.createComponent(ReportListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
