import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-create-usuarios',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-usuarios.component.html',
  styleUrl: './create-usuarios.component.css'
})
export default class CreateUsuariosComponent {
  userForm: FormGroup;

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', [Validators.required]],
      maill: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {
   this.userForm;
   
  }
  Save(data: any): void {
    this.apiService.Post(data).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error( error);
      }
    );
  }
  onSubmit() {
    if (this.userForm.valid) {
      this.Save(this.userForm.value);
      alert("Usuario creado")
    } else {
      alert('Error al crear el usuario');

    }
  }
}
