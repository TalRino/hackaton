import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcharacterComponent } from './formcharacter.component';

describe('FormcharacterComponent', () => {
  let component: FormcharacterComponent;
  let fixture: ComponentFixture<FormcharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormcharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
