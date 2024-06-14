import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interface',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interface.component.html',
  styleUrl: './interface.component.css',
})
export class InterfaceComponent {
  user = 'pablo a cisera';
  isLoggedIn=true;
  result= "";

  traslateNumber(value:string){
    this.result = value;
  } 

  resetTraslate(){
    this.result = "";
    (document.querySelector('input[type="number"]') as HTMLInputElement).value = '';
  }
}
