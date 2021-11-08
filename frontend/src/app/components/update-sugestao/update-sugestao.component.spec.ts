import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSugestaoComponent } from './update-sugestao.component';

describe('UpdateSugestaoComponent', () => {
  let component: UpdateSugestaoComponent;
  let fixture: ComponentFixture<UpdateSugestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSugestaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSugestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
