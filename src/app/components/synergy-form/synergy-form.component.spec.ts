import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynergyFormComponent } from './synergy-form.component';

describe('SynergyFormComponent', () => {
  let component: SynergyFormComponent;
  let fixture: ComponentFixture<SynergyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynergyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SynergyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
