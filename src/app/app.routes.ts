
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { OverviewComponent } from './product/overview/overview.component';
import { ProductComponent } from './product/product.component';
import { SpecificationComponent } from './product/specification/specification.component';
import { LoginGaurdService } from './services/login-gaurd.service';
import { UsersComponent } from './users/user.component';
import { NewEmployeeComponent } from './employee/new-employee/new-employee.component';

export const APP_ROUTES : Routes = [
    {
        path : '',                          //http://localhost:4200
        redirectTo : "login",
        pathMatch : 'full'
    },{
        path : 'login',                     //http://localhost:4200/login
        component : LoginComponent
    },{
        path : "register",                  //http://localhost:4200/register
        component : RegisterComponent
    },{
        path : "pipe",                      //http://localhost:4200/pipe
        component : PipeDemoComponent
    },{
        path : "users",                     //http://localhost:4200/users
        component : UsersComponent,
        canActivate : [LoginGaurdService]
    },{
        path : "observable",                //http://localhost:4200/observable
        component : ObservableDemoComponent
    },{
        path : "product",
        component : ProductComponent,
        children : [{
            path : "overview/:id/:name",
            component : OverviewComponent
        }, {
            path : "spec",
            component : SpecificationComponent
        }]
    },{
        path : 'employee',
        component : NewEmployeeComponent
    },{
        path : "lazy",
        loadChildren : './lazy/lazy.module#LazyModule'
    },{
        path : "**",                        //http://localhost:4200/nowhere
        redirectTo : "login",
        pathMatch : 'prefix'
    }
]