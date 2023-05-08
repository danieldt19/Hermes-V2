import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { LoginViewModule } from 'src/app/core/components/login-view/login-view.module';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { MessageService } from 'primeng/api';
import { ThemeModule } from 'src/app/core/theme/theme.module';



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginViewModule,
    LoginPageRoutingModule,
    ThemeModule
  ],
  exports:[LoginPageComponent],
  providers: [MessageService],
})
export class LoginPageModule { }
