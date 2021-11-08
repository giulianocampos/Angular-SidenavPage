import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSugestaoComponent } from './delete-sugestao.component';

describe('DeleteSugestaoComponent', () => {
  let component: DeleteSugestaoComponent;
  let fixture: ComponentFixture<DeleteSugestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSugestaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSugestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
