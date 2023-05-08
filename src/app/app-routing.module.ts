import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "inicio",
    loadChildren: () =>
      import("./pages/public/login-page/login-page.module").then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: "perfil",
    loadChildren: () =>
      import("./pages/private/profile-page/profile-page.module").then(
        (m) => m.ProfilePageModule
      ),
  },
  { path: "**", redirectTo: "inicio" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}