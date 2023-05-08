import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LiquidCuadrePageComponent } from "./liquid-cuadre-page.component";
import { ThemeModule } from "src/app/core/theme/theme.module";
import { LiquidCuadrePageRoutingModule } from "./liquid-cuadre-page-routing.module";
import { LiquidCuadreModule } from "src/app/core/components/liquid-cuadre/liquid-cuadre.module";

@NgModule({
  declarations: [LiquidCuadrePageComponent],
  imports: [CommonModule, ThemeModule, LiquidCuadrePageRoutingModule, LiquidCuadreModule],
})
export class LiquidCuadrePageModule {}
