import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ThemeModule } from "src/app/core/theme/theme.module";
import { ChangePasswordViewComponent } from "./change-password-view.component";

@NgModule({
  declarations: [ChangePasswordViewComponent],
  imports: [CommonModule, ThemeModule, ReactiveFormsModule],
  exports: [ChangePasswordViewComponent],
})
export class ChangePasswordViewModule {}
