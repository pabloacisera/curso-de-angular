import { Component } from '@angular/core';
import { ComponentChildreComponent } from '../component-childre/component-childre.component';

@Component({
  selector: 'app-component-parent',
  standalone: true,
  imports: [ComponentChildreComponent],
  templateUrl: './component-parent.component.html',
  styleUrl: './component-parent.component.css'
})
export class ComponentParentComponent {
  fav = '';

  getFav(id: string){
    this.fav= id;
  }
}
