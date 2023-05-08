import { Component, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
  selector: "hermes-login-view",
  templateUrl: "./login-view.component.html",
  styleUrls: ["./login-view.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class LoginViewComponent {
  public username = "";
  public password = "";

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
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
      // aquí debes enviar el formulario al servidor
    } else {
      this.form.markAllAsTouched();
    }
  }
}
