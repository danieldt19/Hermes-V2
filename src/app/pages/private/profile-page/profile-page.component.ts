import { Component } from "@angular/core";

@Component({
  selector: "app-profile-page",
  templateUrl: "./profile-page.component.html",
  styleUrls: ["./profile-page.component.scss"],
})
export class ProfilePageComponent {
  public showProfileView = true;
  public showPasswordView = false;

  constructor() {}

  public changeToPasswordView() {
    this.showProfileView = false;
    this.showPasswordView = true;
  }

  public changeToProfileView() {
    this.showProfileView = true;
    this.showPasswordView = false;
  }
}
