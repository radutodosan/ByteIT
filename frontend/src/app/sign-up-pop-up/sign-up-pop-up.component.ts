import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from "../services/authentication.service";
import { HttpClient } from '@angular/common/http';
import {AlertType} from "../enums/alert-type";
import {AlertService} from "../services/alert.service";


@Component({
  selector: 'app-sign-up-pop-up',
  templateUrl: './sign-up-pop-up.component.html',
  styleUrls: ['./sign-up-pop-up.component.css']
})
export class SignUpPopUpComponent implements OnInit{
  signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private http:HttpClient,
    private alertService: AlertService,
  ) {
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  showAlert(type:AlertType, text:String){
    this.alertService.setAlert({
      type: type,
      text : text,
    });
  }


  closeModal() {
    const loginModal = document.getElementById("signupModal");
    console.log("close sign up button pressed");
    if (loginModal != null) {
      loginModal.style.display = 'none';
    }
  }


  signupUser(){
    console.log(this.signupForm.value);

    console.log("YOOOO");
    const url = "http://localhost/backend/register.php";
    var data = this.signupForm.value;
    this.http.post(url, data, {responseType: 'text'}).subscribe(
      (response) => {
        console.log('Response:', response);
        this.closeModal();

        if(response.includes("failed")){
          this.showAlert(AlertType.ERROR,'Signup failed! This username is already used!');
        }
        else
          this.showAlert(AlertType.SUCCESS,'Account created successfully!');
      },
      (error)=>{
        console.error("ERROR! SIGNUP FAILED!", error);
        this.showAlert(AlertType.ERROR,'Signup failed! Please try again.');
        },

    )



  }
}
