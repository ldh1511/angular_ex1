import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCircleComponent } from './item-circle.component';

describe('ItemCircleComponent', () => {
  let component: ItemCircleComponent;
  let fixture: ComponentFixture<ItemCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
