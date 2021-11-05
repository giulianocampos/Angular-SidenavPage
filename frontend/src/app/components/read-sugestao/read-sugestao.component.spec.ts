import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadSugestaoComponent } from './read-sugestao.component';

describe('ReadSugestaoComponent', () => {
  let component: ReadSugestaoComponent;
  let fixture: ComponentFixture<ReadSugestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadSugestaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadSugestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
