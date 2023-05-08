import { Component, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { ConfirmationService, MessageService } from "primeng/api";

@Component({
  selector: 'hermes-change-password-view',
  templateUrl: './change-password-view.component.html',
  styleUrls: ['./change-password-view.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class ChangePasswordViewComponent {

  public form: FormGroup;

  @Output() backToProfileView = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.form = this.fb.group({
      oldPassword: ["", [Validators.required]],
      newPassword: ["", Validators.required],
      newPasswordRepeat: ["", Validators.required],
    });
  }

  public backToProfile(): void {
    this.backToProfileView.emit();
  }

  public onSubmit(): void {
    if (this.form.valid) {
      //TODO Implementar esto
      this.confirmationService.confirm({
        message: "¿Está seguro de actualizar la contraseña?",
        header: "Confirmar",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          this.messageService.add({
            severity: "success",
            summary: "Actualizada",
            detail: "Contraseña actualizada con éxito",
            life: 3000,
          });
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

}
