import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationComponent } from './test.component';

describe('TestComponent', () => {
  let component: PresentationComponent;
  let fixture: ComponentFixture<PresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresentationComponent]
    });
    fixture = TestBed.createComponent(PresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
