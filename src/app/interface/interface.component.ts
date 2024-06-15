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
  username = 'PABLO CISERA';
  isLoggedIn=false;
  result= "";

  traslateNumber(value:string){
    this.result = value;
  } 

  resetTraslate(){
    this.result = "";
    (document.querySelector('input[type="number"]') as HTMLInputElement).value = '';
  }

  changeState(){
    this.isLoggedIn=true;
  }

  logout(){
    this.isLoggedIn=false;
  }
}
