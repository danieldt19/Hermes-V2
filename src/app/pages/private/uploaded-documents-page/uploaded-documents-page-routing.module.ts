import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UploadedDocumentsPageComponent } from "./uploaded-documents-page.component";

const routes: Routes = [
  {
    path: "",
    component: UploadedDocumentsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadedDocumentsPageRoutingModule {}
