import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizacaoListagemComponent } from './autorizacao-listagem.component';

describe('AutorizacaoListagemComponent', () => {
  let component: AutorizacaoListagemComponent;
  let fixture: ComponentFixture<AutorizacaoListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorizacaoListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorizacaoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
