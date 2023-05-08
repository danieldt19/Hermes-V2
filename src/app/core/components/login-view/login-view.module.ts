import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginViewComponent } from "./login-view.component";
import { ThemeModule } from "../../theme/theme.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [LoginViewComponent],
  imports: [CommonModule, ThemeModule, ReactiveFormsModule],
  exports: [LoginViewComponent],
})
export class LoginViewModule {}
