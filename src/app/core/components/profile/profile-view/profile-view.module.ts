import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThemeModule } from "../../../theme/theme.module";
import { ReactiveFormsModule } from "@angular/forms";
import { ProfileViewComponent } from "./profile-view.component";

@NgModule({
  declarations: [ProfileViewComponent],
  imports: [CommonModule, ThemeModule, ReactiveFormsModule],
  exports: [ProfileViewComponent],
})
export class ProfileViewModule {}
