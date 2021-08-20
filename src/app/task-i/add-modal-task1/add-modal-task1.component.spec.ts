import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalTask1Component } from './add-modal-task1.component';

describe('AddModalTask1Component', () => {
  let component: AddModalTask1Component;
  let fixture: ComponentFixture<AddModalTask1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModalTask1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModalTask1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
