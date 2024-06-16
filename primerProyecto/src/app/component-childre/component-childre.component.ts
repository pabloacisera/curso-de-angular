import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component-childre',
  standalone: true,
  imports: [],
  templateUrl: './component-childre.component.html',
  styleUrl: './component-childre.component.css'
})
export class ComponentChildreComponent {

  @Output() favEmitterEvent = new EventEmitter<string>()

  guardarAjedrez(id: string): void {
    this.favEmitterEvent.emit(id)
  }

  guardarNetflix(id: string): void {
    this.favEmitterEvent.emit(id)
  }

  guardarSiesta(id: string): void {
    this.favEmitterEvent.emit(id)
  }

}
