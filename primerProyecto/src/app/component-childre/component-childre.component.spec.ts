import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentChildreComponent } from './component-childre.component';

describe('ComponentChildreComponent', () => {
  let component: ComponentChildreComponent;
  let fixture: ComponentFixture<ComponentChildreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentChildreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentChildreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
