import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkOrdersComponent } from './my-work-orders.component';

describe('MyWorkOrdersComponent', () => {
  let component: MyWorkOrdersComponent;
  let fixture: ComponentFixture<MyWorkOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWorkOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWorkOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
