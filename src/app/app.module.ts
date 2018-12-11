
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LifeCycleDemoComponent } from './life-cycle-demo/life-cycle-demo.component';
import { UserImgComponent } from './users/user-img/user-img.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { UsersComponent } from './users/user.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserImgComponent,
    UserInfoComponent,
    LifeCycleDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
