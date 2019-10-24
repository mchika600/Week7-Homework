import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeakmapWeaksetComponent } from './weakmap-weakset.component';

describe('WeakmapWeaksetComponent', () => {
  let component: WeakmapWeaksetComponent;
  let fixture: ComponentFixture<WeakmapWeaksetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeakmapWeaksetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeakmapWeaksetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
