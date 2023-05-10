import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LiquidCuadreComponent } from "./liquid-cuadre.component";
import { ThemeModule } from "../../theme/theme.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [LiquidCuadreComponent],
  imports: [CommonModule, ThemeModule, ReactiveFormsModule],
  exports: [LiquidCuadreComponent]
})
export class LiquidCuadreModule {}
