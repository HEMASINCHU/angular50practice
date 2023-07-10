import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandingcardComponent } from './expandingcard.component';

describe('ExpandingcardComponent', () => {
  let component: ExpandingcardComponent;
  let fixture: ComponentFixture<ExpandingcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ExpandingcardComponent]
    });
    fixture = TestBed.createComponent(ExpandingcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
