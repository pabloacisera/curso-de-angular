import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressiveLoadComponent } from './progressive-load.component';

describe('ProgressiveLoadComponent', () => {
  let component: ProgressiveLoadComponent;
  let fixture: ComponentFixture<ProgressiveLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressiveLoadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressiveLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
