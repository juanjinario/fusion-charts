import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KagiComponent } from './kagi.component';

describe('KagiComponent', () => {
  let component: KagiComponent;
  let fixture: ComponentFixture<KagiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KagiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KagiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
