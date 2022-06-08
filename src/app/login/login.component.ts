import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  authenticateUser(user: any) {
    sessionStorage.setItem("user", user);
    if (user == "admin") {
      this.router.navigate(['/addItem']);
    } else {
      this.router.navigate(['/catalogue']);
    }
  }

  onSubmit() {
    if(this.loginForm.value){
      this.authenticateUser(this.loginForm.value.userName);
    } else {
      alert('Enter User Name and Password');
    }
  }

}
