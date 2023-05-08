import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";

@Component({
  selector: "hermes-panel-menu",
  templateUrl: "./panel-menu.component.html",
  styleUrls: ["./panel-menu.component.scss"],
})
export class PanelMenuComponent implements OnInit {
  items: MenuItem[];

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: "Mi perfil",
        icon: "pi pi-fw pi-user",
        routerLink: "/perfil",
      },
      {
        label: "Subidas",
        icon: "pi pi-cloud-upload",
        items: [
          {
            label: "Resumen de Nómina",
            icon: "pi pi-upload",
          },
          {
            label: "Apunte Contable de nómina y prenómina",
            icon: "pi pi pi-upload",
          },
          {
            label: "Archivo de transferencia",
            icon: "pi pi pi-upload",
          },
          {
            label: "Excel de finiquitos pendientes",
            icon: "pi pi pi-upload",
          },
          {
            label: "Excel finiquitos SSCC",
            icon: "pi pi pi-upload",
          },
          {
            label: "Archivos transferencia fiquitos",
            icon: "pi pi pi-upload",
          },
        ],
      },
      {
        label: "Cuadre líquidos",
        icon: "pi pi-chart-bar",
        routerLink: '/cuadre-liquidos'
      },
      {
        label: "Documentos subidos",
        icon: "pi pi-file-export",
      },
      {
        label: "Generar diferencias",
        icon: "pi pi-sort-alt",
      },
      {
        label: "Líquidos negativos",
        icon: "pi pi-sort-down",
      },
      {
        label: "Cerrar sesión",
        icon: "pi pi-sign-out",
      },
    ];
  }
}
