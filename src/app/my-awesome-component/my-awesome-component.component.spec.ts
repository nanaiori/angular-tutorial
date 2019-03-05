import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAwesomeComponentComponent } from './my-awesome-component.component';

describe('MyAwesomeComponentComponent', () => {
  let component: MyAwesomeComponentComponent;
  let fixture: ComponentFixture<MyAwesomeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAwesomeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAwesomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
