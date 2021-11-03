import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeiaSolucaoComponent } from './ideia-solucao.component';

describe('IdeiaSolucaoComponent', () => {
  let component: IdeiaSolucaoComponent;
  let fixture: ComponentFixture<IdeiaSolucaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeiaSolucaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeiaSolucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
