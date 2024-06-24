import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-usuarios',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './update-usuarios.component.html',
  styleUrl: './update-usuarios.component.css'
})

export default class UpdateUsuariosComponent {
  userForm: FormGroup;
  data:any;
  userId:any;
  formUpdate:any;
  constructor(private apiService: ApiService, private fb: FormBuilder,private route: ActivatedRoute) {
    this.userForm = this.fb.group({
      id:[''],
      name: ['', Validators.required],
      lastName: ['', [Validators.required]],
      maill: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.userForm;
    this.userId = this.route.snapshot.paramMap.get('data');
    var idUser= this.userId;
    this.fetchUserData(this.userId); 
   }
   fetchUserData(userId: any): void {
    this.apiService.GetOne(userId).subscribe(
      response => {
        this.data = response;
        this.updateForm(); // Llama a esta función para asegurar que el formulario refleje los datos del usuario
        console.log('Datos del usuario:', this.data);
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    );
  }
  updateForm(): void {
    this.userForm.patchValue({
      id:this.userId,
      name: this.data.name,
      lastName: this.data.lastName,
      maill: this.data.maill,
      password: this.data.password,
    });
  }


   update(id:any): void {
    this.formUpdate=this.userForm.value;
  
    this.apiService.Put(id,this.formUpdate).subscribe(
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
      this.update(this.userId);
      alert("Usuario actualizado")
    } else {
      alert('Error al actualizar el usuario');

    }
  }
}
