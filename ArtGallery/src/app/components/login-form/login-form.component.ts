import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service'; // Importă UserServiceService cu calea relativă corectă
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  isPasswordVisible = false;
  showPopup = false;
  loginForm = this.fb.group({
    username: ['', Validators.required], // Folosește username în loc de email
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private userService: UserServiceService, private router: Router) {}

  onSubmit() {
    this.loginUser();
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  loginUser() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.userService.loginUser(username!, password!).subscribe(
        (response) => {
         this.router.navigate(['/home']);
        },
        (error) => {
          this.togglePopup();
        }
      );
    }
  }
  togglePopup() {
    this.showPopup = !this.showPopup;
  }
  isFormValid():boolean
  {
    //check if the form is valid by checking if all the user inputs are over 5 characters
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    if(username!.length < 5 || password!.length < 5)
      return false;
    return true;
}
}