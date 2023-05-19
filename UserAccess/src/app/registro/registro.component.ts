import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registroForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  registrar(): void {
    if (this.registroForm.valid) {
      // Realizar el registro y redirigir a la página de inicio de sesión
      this.router.navigate(['/inicio-sesion']);
    } else {
      // Mostrar ventana emergente o mensaje de error indicando campos inválidos
      alert('Por favor, complete correctamente todos los campos');
    }
  }
}
