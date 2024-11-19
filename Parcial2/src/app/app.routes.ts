import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
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
        component: CharacterComponent
    },
    {
        path: "**",
        component: NotFoundComponent
    }

];
