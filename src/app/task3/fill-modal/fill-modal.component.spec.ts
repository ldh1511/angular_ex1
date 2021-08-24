import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillModalComponent } from './fill-modal.component';

describe('FillModalComponent', () => {
  let component: FillModalComponent;
  let fixture: ComponentFixture<FillModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
