import {Component, OnInit} from '@angular/core';
import {slideInUpOnEnterAnimation} from "angular-animations";
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";
import {AlertService} from "../services/alert.service";
import {AlertType} from "../enums/alert-type";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-settings',
  animations:[
    slideInUpOnEnterAnimation({duration:650})
  ],
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit{
  animationState:boolean = false;

  loggedUser: any;

  currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
  checkedTheme!: boolean;
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private alertService: AlertService,
    private http:HttpClient,
  ) {
    this.animate();
  }

  getAll(){
    const username = this.authService.loggedUser.name;
    const url = "http://localhost/backend/user-settings.php?username=" + username;
    return this.http.get(url);
  }
  ngOnInit(): void {
    this.getAll().subscribe(
      (data: any) => {
        // console.log("DATA = ", data);
        this.loggedUser = data;
        console.log("LOGGED USER = ", this.loggedUser);
      },
      (err) => {
        console.log("ERROR: ", err);
      }
    )

    if (this.currentTheme) {
      document.documentElement.setAttribute('data-theme', this.currentTheme);
      this.checkedTheme = this.currentTheme != "dark";
    }
  }

  showAlert(type:AlertType, text:String){
    this.alertService.setAlert({
      type: type,
      text : text,
    });
  }

  animate(){
    this.animationState = false;
    setTimeout(() => {
      this.animationState = true;
    }, 100);
  }


  openEditProfileModal(){
    const editProfileModal = document.getElementById("editProfileModal");
    if(editProfileModal != null)
      editProfileModal.style.display = 'block';

  }

  openSubscriptionModal(){
    const subscriptionModal = document.getElementById("subscriptionModal");
    if(subscriptionModal != null)
      subscriptionModal.style.display = 'block';

  }

  logoutUser(){
    this.authService.logout();
    this.router.navigate(['/']);
    this.showAlert(AlertType.INFO,'Logout Successful!');
  }

  // @ts-ignore
  switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light'); //add this
    } else {

      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark'); //add this
    }
  }
}
