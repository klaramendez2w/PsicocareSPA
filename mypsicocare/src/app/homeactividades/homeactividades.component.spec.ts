import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeactividadesComponent } from './homeactividades.component';

describe('HomeactividadesComponent', () => {
  let component: HomeactividadesComponent;
  let fixture: ComponentFixture<HomeactividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeactividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeactividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
