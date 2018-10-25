import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteDashComponent } from './quote-dash.component';

describe('QuoteDashComponent', () => {
  let component: QuoteDashComponent;
  let fixture: ComponentFixture<QuoteDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
