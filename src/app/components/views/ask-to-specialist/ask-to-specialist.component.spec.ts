import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskToSpecialistComponent } from './ask-to-specialist.component';

describe('AskToSpecialistComponent', () => {
  let component: AskToSpecialistComponent;
  let fixture: ComponentFixture<AskToSpecialistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskToSpecialistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskToSpecialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
