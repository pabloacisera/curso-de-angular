import { Component } from '@angular/core';

interface Clients {
  id: string;
  nombre: string;
  dni: string;
}

@Component({
  selector: 'app-table-client',
  standalone: true,
  imports: [],
  templateUrl: './table-client.component.html',
  styleUrl: './table-client.component.css',
})
export class TableClientComponent {
  clients: Clients[] = [];

  id = '';

  nombre = '';

  dni = '';

  clickedId = false;
  clickedDni = false;
  clickedNombre = false;

  grabarId(value: string) {
    this.id = value;
    this.clickedId= true;
  }

  grabarNombre(value: string) {
    this.nombre = value;
    this.clickedNombre = true;
  }

  grabarDni(value: string) {
    this.dni = value;
    this.clickedDni = true;
  }

  agregarCliente() {
    const nuevoCliente: Clients = {
      id: this.id,
      nombre: this.nombre,
      dni: this.dni,
    };

    this.clients.push(nuevoCliente);

    this.id = '';
    this.nombre = '';
    this.dni = '';
    this.clickedId = false;
    this.clickedNombre = false;
    this.clickedDni = false;
  }
}
