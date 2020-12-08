import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrusaderComponent } from './crusader.component';

describe('CrusaderComponent', () => {
  let component: CrusaderComponent;
  let fixture: ComponentFixture<CrusaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrusaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrusaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
