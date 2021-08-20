import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailTask1Component } from './user-detail-task1.component';

describe('UserDetailTask1Component', () => {
  let component: UserDetailTask1Component;
  let fixture: ComponentFixture<UserDetailTask1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailTask1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailTask1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
