import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard as guard} from './auth.service';
const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path:'home',
        canActivate : [guard],
        component:HomeComponent
    },
    // {
    //     path:'profile/:id',
    //     component:UserprofileComponent
    // }
    
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
