import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecromancerComponent } from './necromancer.component';

describe('NecromancerComponent', () => {
  let component: NecromancerComponent;
  let fixture: ComponentFixture<NecromancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NecromancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NecromancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
