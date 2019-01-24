import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NTestComponent } from './ntest.component';

describe('NTestComponent', () => {
  let component: NTestComponent;
  let fixture: ComponentFixture<NTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
