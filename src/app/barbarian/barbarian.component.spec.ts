import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbarianComponent } from './barbarian.component';

describe('BarbarianComponent', () => {
  let component: BarbarianComponent;
  let fixture: ComponentFixture<BarbarianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarbarianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarbarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
