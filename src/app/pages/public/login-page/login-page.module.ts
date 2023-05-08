import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { LoginViewModule } from 'src/app/core/components/login-view/login-view.module';



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginViewModule
    
  ],
  exports:[LoginPageComponent]
})
export class LoginPageModule { }
