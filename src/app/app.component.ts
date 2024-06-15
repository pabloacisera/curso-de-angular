import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventoClickComponent } from './evento-click/evento-click.component';
import { InterfaceComponent } from './interface/interface.component';
import { CommonModule } from '@angular/common';
import { TableClientComponent } from './table-client/table-client.component';
import { ComponentParentComponent } from './component-parent/component-parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    EventoClickComponent,
    InterfaceComponent,
    CommonModule,
    TableClientComponent,
    ComponentParentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export default class AppComponent {
  title = 'primerProyecto';
}
