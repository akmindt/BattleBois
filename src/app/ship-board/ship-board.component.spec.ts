import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipBoardComponent } from './ship-board.component';

describe('ShipBoardComponent', () => {
  let component: ShipBoardComponent;
  let fixture: ComponentFixture<ShipBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
