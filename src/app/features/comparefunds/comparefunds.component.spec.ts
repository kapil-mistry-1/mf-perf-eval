import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparefundsComponent } from './comparefunds.component';

describe('ComparefundsComponent', () => {
  let component: ComparefundsComponent;
  let fixture: ComponentFixture<ComparefundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparefundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparefundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
