import { Component, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";

@Component({
  selector: "hermes-login-view",
  templateUrl: "./login-view.component.html",
  styleUrls: ["./login-view.component.scss"],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService],
})
export class LoginViewComponent {
  public username = "";
  public password = "";

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService
  ) {
    this.form = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", Validators.required],
    });
  }

  public resetForm(): void {
    this.form.reset();
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this.messageService.add({
        severity: "success",
        summary: "Exitoso",
        detail: "Inicio de sesión realizado con éxito",
        life: 3000,
      });
      setTimeout(() => {
        this.router.navigate(["/perfil"]);
      }, 1000);
      
    } else {
      this.form.markAllAsTouched();
    }
  }
}
