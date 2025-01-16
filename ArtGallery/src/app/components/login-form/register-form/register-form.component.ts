import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../../../services/user-service.service' // Importă UserServiceService cu calea relativă corectă

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
isPasswordVisible = false;
  loginForm = this.fb.group({
    username: ['', Validators.required], // Folosește username în loc de email
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private userService: UserServiceService) {}

  onSubmit() {
    this.registerUser();
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  registerUser() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.userService.registerUser(username!, password!).subscribe(
        (response) => {
          alert('Registration successful');
        },
        (error) => {
          alert('Registration error');
        }
      );
    }
  }
}
