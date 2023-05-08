import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PanelMenuComponent } from "./panel-menu.component";
import { ThemeModule } from "../../theme/theme.module";

@NgModule({
  declarations: [PanelMenuComponent],
  imports: [CommonModule, ThemeModule],
  exports: [PanelMenuComponent],
})
export class PanelMenuModule {}
