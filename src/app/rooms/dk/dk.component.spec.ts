import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkComponent } from './dk.component';

describe('DkComponent', () => {
  let component: DkComponent;
  let fixture: ComponentFixture<DkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
