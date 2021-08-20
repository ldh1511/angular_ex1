import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskIiComponent } from './task-ii.component';

describe('TaskIiComponent', () => {
  let component: TaskIiComponent;
  let fixture: ComponentFixture<TaskIiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskIiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
