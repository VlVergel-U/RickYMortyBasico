import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import path from 'path';
import { protectionGuard } from './guards/protection.guard';
import { NotFoundComponent } from './notfound/notfound.component';
import { CharacterComponent } from './pages/character/character.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch:'full'
    },
    {
        path: 'login',
        component:LoginComponent
    },
    {
        path: "home",
        canActivate: [protectionGuard],
        children:[
            {
                path: "character",
                component: CharacterComponent
            },
        ]
    },
    {
        path: "**",
        component: NotFoundComponent
    }

];
