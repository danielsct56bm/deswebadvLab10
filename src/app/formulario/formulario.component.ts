import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder){
    this.formulario=this.fb.group({
      nombre: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]]
    });
  }

  confirmSubmit(event: Event) {
    const confirmation = window.confirm('¿Estás seguro de que deseas enviar el formulario?');
    if (!confirmation){
      event.preventDefault();
    }
  }

  onSubmit(){
    if (this.formulario.valid) {
      console.log('Formulario enviado');
      console.log('Nombre: ${this.formulario.value.nombre}');
      console.log('Email: ${this.formulario.value.email}');

      // Crear los datos a mostrar en la nueva ventana
    const datos = {
      nombre: this.formulario.value.nombre,
      email: this.formulario.value.email
    };

    // Abrir una nueva ventana y mostrar los datos
    const nuevaVentana = window.open('', '_blank');
    nuevaVentana?.document.write(`
      <html>
      <head><title>Datos del Formulario</title></head>
      <body>
        <h2>Datos del Formulario</h2>
        <p><strong>Nombre:</strong> ${datos.nombre}</p>
        <p><strong>Email:</strong> ${datos.email}</p>
      </body>
      </html>
    `);

      this.formulario.reset();
    } else {
      console.log('El formulario no es válido');
    }
  }
}
