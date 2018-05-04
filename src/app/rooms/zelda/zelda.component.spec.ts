import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeldaComponent } from './zelda.component';

describe('ZeldaComponent', () => {
  let component: ZeldaComponent;
  let fixture: ComponentFixture<ZeldaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZeldaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeldaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
