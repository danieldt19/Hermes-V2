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
  {
    path: "cuadre-liquidos",
    loadChildren: () =>
      import("./pages/private/liquid-cuadre-page/liquid-cuadre-page.module").then(
        (m) => m.LiquidCuadrePageModule
      ),
  },
  {
    path: "documentos-subidos",
    loadChildren: () =>
      import("./pages/private/uploaded-documents-page/uploaded-documents-page.module").then(
        (m) => m.UploadedDocumentsPageModule
      ),
  },
  { path: "**", redirectTo: "inicio" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
