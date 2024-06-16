import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventoClickComponent } from './evento-click/evento-click.component';
import { InterfaceComponent } from './interface/interface.component';
import { CommonModule } from '@angular/common';
import { TableClientComponent } from './table-client/table-client.component';
import { ComponentParentComponent } from './component-parent/component-parent.component';
import { ProgressiveLoadComponent } from './progressive-load/progressive-load.component';
import { PokemonRenderComponent } from './pokemon-render/pokemon-render.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    EventoClickComponent,
    InterfaceComponent,
    CommonModule,
    TableClientComponent,
    ComponentParentComponent,
    ProgressiveLoadComponent,
    PokemonRenderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export default class AppComponent {
  title = 'primerProyecto';
}
