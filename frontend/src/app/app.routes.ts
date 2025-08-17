import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path:'',
        component:Layout,
        children:[
            {
                path:'',
                component:Home,
                title:'Inicio'
            }
        ]
    }
];
