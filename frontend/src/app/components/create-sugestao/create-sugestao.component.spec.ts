import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSugestaoComponent } from './create-sugestao.component';

describe('CreateSugestaoComponent', () => {
  let component: CreateSugestaoComponent;
  let fixture: ComponentFixture<CreateSugestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSugestaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSugestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
