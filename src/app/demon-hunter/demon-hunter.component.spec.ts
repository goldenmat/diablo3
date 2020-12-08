import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonHunterComponent } from './demon-hunter.component';

describe('DemonHunterComponent', () => {
  let component: DemonHunterComponent;
  let fixture: ComponentFixture<DemonHunterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonHunterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonHunterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
