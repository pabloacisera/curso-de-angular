import { Component } from '@angular/core';

@Component({
  selector: 'app-evento-click',
  standalone: true,
  imports: [],
  templateUrl: './evento-click.component.html',
  styleUrl: './evento-click.component.css'
})
export class EventoClickComponent {
  number = 0;

  clickChangeSum(){
    this.number +=1;
  }

  clickChangeRest(){
    this.number -=1;
  }

  clickReset(){
    this.number = 0;
  }
}
