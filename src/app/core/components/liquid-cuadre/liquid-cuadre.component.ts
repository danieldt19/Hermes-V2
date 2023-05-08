import { Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ConfirmationService, MessageService } from "primeng/api";

@Component({
  selector: "hermes-liquid-cuadre",
  templateUrl: "./liquid-cuadre.component.html",
  styleUrls: ["./liquid-cuadre.component.scss"],
  providers: [MessageService, ConfirmationService],
})
export class LiquidCuadreComponent {
  private currentYear: number = new Date().getFullYear();

  public form: FormGroup;

  @Output() showPasswordEmitter = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.form = this.fb.group({
      month: [
        "",
        [
          Validators.required,
          Validators.min(1),
          Validators.max(12),
        ],
      ],
      year: [
        "",
        [
          Validators.required,
          Validators.min(1900),
          Validators.max(this.currentYear),
        ],
      ],
      category: ["", [Validators.required]],
    });
  }

  public options: Array<{ key: string; name: string }> = [
    { key: "option1", name: "Paga extra" },
    { key: "option2", name: "No paga extra" },
  ];

  public resetForm(): void {
    this.form.reset();
  }

  public onSubmit(): void {
    if (this.form.valid) {
      //TODO Implementar esto

      this.messageService.add({
        severity: "success",
        summary: "Generado con éxito",
        detail: "Cuadre de líquidos generado con éxito",
        life: 3000,
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
