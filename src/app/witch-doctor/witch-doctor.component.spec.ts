import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WitchDoctorComponent } from './witch-doctor.component';

describe('WitchDoctorComponent', () => {
  let component: WitchDoctorComponent;
  let fixture: ComponentFixture<WitchDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WitchDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WitchDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
