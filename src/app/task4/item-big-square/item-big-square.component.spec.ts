import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBigSquareComponent } from './item-big-square.component';

describe('ItemBigSquareComponent', () => {
  let component: ItemBigSquareComponent;
  let fixture: ComponentFixture<ItemBigSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemBigSquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBigSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
