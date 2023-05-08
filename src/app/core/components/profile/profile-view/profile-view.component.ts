import { Component, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { ConfirmationService, MessageService } from "primeng/api";

@Component({
  selector: "hermes-profile-view",
  templateUrl: "./profile-view.component.html",
  styleUrls: ["./profile-view.component.scss"],
  providers: [MessageService, ConfirmationService],
})
export class ProfileViewComponent {
  public name = "Daniel Domínguez tejada";
  public username = "daniel.dominguez";

  public form: FormGroup;

  @Output() showPasswordEmitter = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.form = this.fb.group({
      name: ["", [Validators.required]],
      username: ["", Validators.required],
    });
  }

  public changePassword(): void {
    //TODO Hay que implementar esto
    this.showPasswordEmitter.emit();
  }

  public onSubmit(): void {
    if (this.form.valid) {
      //TODO Implementar esto
      this.confirmationService.confirm({
        message: "¿Está seguro de actualizar los datos?",
        header: "Confirmar",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          this.messageService.add({
            severity: "success",
            summary: "Actualizado",
            detail: "Datos actualizados con éxito",
            life: 3000,
          });
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
