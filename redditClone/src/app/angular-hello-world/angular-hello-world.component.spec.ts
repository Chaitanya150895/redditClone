import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularHelloWorldComponent } from './angular-hello-world.component';

describe('AngularHelloWorldComponent', () => {
  let component: AngularHelloWorldComponent;
  let fixture: ComponentFixture<AngularHelloWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularHelloWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularHelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
