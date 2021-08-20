import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskIComponent } from './task-i.component';

describe('TaskIComponent', () => {
  let component: TaskIComponent;
  let fixture: ComponentFixture<TaskIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
