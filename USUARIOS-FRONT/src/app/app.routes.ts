import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'dashboard',
        loadComponent:()=> import('./dashboard/dashboard.component'),
        children:[
            {
                path:'', redirectTo:'create-usuarios', pathMatch:'full'
            },

            {
                path:'create-usuarios',
                title:'Crear Usuario',
                loadComponent:()=>import('./dashboard/pages/create-usuarios/create-usuarios.component')
            },
            {
                path:'lits-usuarios',
                title:'Lista Usuarios',
                loadComponent:()=>import('./dashboard/pages/list-usuarios/list-usuarios.component')
            },
            {
                path:'update-usuarios/:data',
                title:'Actualizar Usuarios',
                loadComponent:()=>import('./dashboard/pages/update-usuarios/update-usuarios.component')
            },
         
            

        ]
    },
    {
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full'
    }
];
