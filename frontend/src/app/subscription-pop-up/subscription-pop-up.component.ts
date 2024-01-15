import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AlertService} from "../services/alert.service";
import {AlertType} from "../enums/alert-type";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-subscription-pop-up',
  templateUrl: './subscription-pop-up.component.html',
  styleUrls: ['./subscription-pop-up.component.css']
})
export class SubscriptionPopUpComponent {
  subscriptionForm!: FormGroup;

  loggedUser : any;

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private authService: AuthenticationService
  ) {
  }



  ngOnInit(): void {
    this.loggedUser = this.authService.loggedUser;

    this.subscriptionForm = this.formBuilder.group({
      username: [this.loggedUser.username, Validators.required],
      email: [this.loggedUser.email, Validators.required],
      name: [this.loggedUser.fullname, Validators.required],
      subscription: [this.loggedUser.subscription, Validators.required],
    });

    console.log(this.loggedUser);

  }

  showAlert(type:AlertType, text:String){
    this.alertService.setAlert({
      type: type,
      text : text,
    });
  }

  subscribe(){
    this.showAlert(AlertType.INFO,'Subscription Updated Successfully!');
  }


  closeModal() {
    const loginModal = document.getElementById("subscriptionModal");
    console.log("Sign up modal closed");
    if (loginModal != null) {
      loginModal.style.display = 'none';
    }
  }
}
