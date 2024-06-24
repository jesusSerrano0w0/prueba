import { Component } from '@angular/core';
import { ApiService } from '../../../api.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-usuarios',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './list-usuarios.component.html',
  styleUrl: './list-usuarios.component.css'
})
export default class ListUsuariosComponent {
  data: any;
  userForm: FormGroup;
  showForm: boolean = false;

  constructor(private apiService: ApiService, private fb: FormBuilder,private router:Router) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', [Validators.required]],
      maill: ['', Validators.required],
      password: ['', Validators.required],

    });
  }
  getDataList(){
    this.apiService.Get().subscribe(
      response => {
        this.data = response;
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    );
  }
  ngOnInit(): void {
    this.getDataList();
  }
  toggleForm(user: any): void {
    this.showForm = true;
    this.userForm.patchValue({
      name: user.name,
      lastName: user.lastName,
      maill: user.maill,
      password: user.password,
    })
  }


  get name() {
    return this.userForm.get('name');
  }

  get maill() {
    return this.userForm.get('maill');
  }

  get lastName() {
    return this.userForm.get('lastName');
  }

  get password() {
    return this.userForm.get('password');
  }

  onDelete(data: any) {
  
      try {
        
        this.deleteUser(data.id);
        
        
      } catch (error) {
        alert(error);
      }
  
   
  }

  deleteUser(data: any): void {
    this.apiService.Delete(data).subscribe(
      response => {
        console.log(response);
        this.getDataList();
        alert("Usuario eliminado")
      },
      error => {
        console.error(error);
      }
    )


  }
  updateUser(data:any){
    let user=data.id;
    this.router.navigate(['/dashboard/update-usuarios/',user]);
  }
 

}
