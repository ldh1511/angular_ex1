import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveModalTask2Component } from './remove-modal-task2.component';

describe('RemoveModalTask2Component', () => {
  let component: RemoveModalTask2Component;
  let fixture: ComponentFixture<RemoveModalTask2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveModalTask2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveModalTask2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
