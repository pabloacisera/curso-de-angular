import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonRenderComponent } from './pokemon-render.component';

describe('PokemonRenderComponent', () => {
  let component: PokemonRenderComponent;
  let fixture: ComponentFixture<PokemonRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonRenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
