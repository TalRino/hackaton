import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEggComponent } from './form-egg.component';

describe('FormEggComponent', () => {
  let component: FormEggComponent;
  let fixture: ComponentFixture<FormEggComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEggComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
