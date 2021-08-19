import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalTask2Component } from './add-modal-task2.component';

describe('AddModalTask2Component', () => {
  let component: AddModalTask2Component;
  let fixture: ComponentFixture<AddModalTask2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModalTask2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModalTask2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
