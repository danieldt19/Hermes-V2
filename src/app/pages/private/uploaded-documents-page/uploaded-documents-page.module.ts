import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UploadedDocumentsPageComponent } from "./uploaded-documents-page.component";
import { ThemeModule } from "src/app/core/theme/theme.module";
import { UploadedDocumentsPageRoutingModule } from "./uploaded-documents-page-routing.module";

@NgModule({
  declarations: [UploadedDocumentsPageComponent],
  imports: [CommonModule, ThemeModule, UploadedDocumentsPageRoutingModule],
})
export class UploadedDocumentsPageModule {}
