import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfilePageComponent } from "./profile-page.component";
import { ThemeModule } from "src/app/core/theme/theme.module";
import { ProfilePageRoutingModule } from "./profile-page-routing.module";
import { ProfileViewModule } from "src/app/core/components/profile/profile-view/profile-view.module";
import { ChangePasswordViewModule } from "src/app/core/components/profile/change-password-view/change-password-view.module";

@NgModule({
  declarations: [ProfilePageComponent],
  imports: [
    CommonModule,
    ThemeModule,
    ProfilePageRoutingModule,
    ProfileViewModule,
    ChangePasswordViewModule,
  ],
})
export class ProfilePageModule {}
