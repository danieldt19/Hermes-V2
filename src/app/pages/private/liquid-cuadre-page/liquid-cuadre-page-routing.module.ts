import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LiquidCuadrePageComponent } from "./liquid-cuadre-page.component";

const routes: Routes = [
  {
    path: "",
    component: LiquidCuadrePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiquidCuadrePageRoutingModule {}
