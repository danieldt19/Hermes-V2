import { Component } from "@angular/core";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-profile-page",
  templateUrl: "./profile-page.component.html",
  styleUrls: ["./profile-page.component.scss"],
  
})
export class ProfilePageComponent {
  public showProfileView = true;
  public showPasswordView = false;

  constructor(private messageService: MessageService) {}

  public changeToPasswordView() {
    this.showProfileView = false;
    this.showPasswordView = true;
  }

  public changeToProfileView() {
    this.showProfileView = true;
    this.showPasswordView = false;
  }
}
