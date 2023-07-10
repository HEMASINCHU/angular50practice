import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddensearchComponent } from './hiddensearch.component';

describe('HiddensearchComponent', () => {
  let component: HiddensearchComponent;
  let fixture: ComponentFixture<HiddensearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HiddensearchComponent]
    });
    fixture = TestBed.createComponent(HiddensearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
