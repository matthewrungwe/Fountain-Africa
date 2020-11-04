import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Interfaces
import { iUser } from '../shared/interfaces/user';

// Services
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: iUser = {
    name: '',
    surname: '',
    email: '',
    phone: undefined,
    password: ''
  };

  isSignedUp: boolean;

  isBtnClicked: boolean; // Checks if submit btn is clicked

  constructor(private userService: UserService,
              private router: Router ) { }

  ngOnInit(): void {
  }

  // Called when submit button is clicked
  submitForm(): void {
    this.createUser();
  }

  createUser(): void {
    if(this.user.name != '' &&
       this.user.surname != '' &&
       this.user.email != '' &&
       this.user.password != '') {

      this.userService.setUser(this.user); // Adds user to the DB
      this.userService.user = this.user; // Sets current user to latest signup

      this.createUserSuccessful();

      console.log(this.userService.getUsers());
    }

    this.isSignedUp = false;
    this.isBtnClicked = true;
  }

  // Route to dashboard when user is successful
  createUserSuccessful() {
    this.router.navigate(['/dashboard']);
  }
}
