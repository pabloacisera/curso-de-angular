import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoClickComponent } from './evento-click.component';

describe('EventoClickComponent', () => {
  let component: EventoClickComponent;
  let fixture: ComponentFixture<EventoClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventoClickComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
