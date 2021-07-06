import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {

  }
  signUpForm:any;
  months: any;
  years: any;

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      emailAddress: ['', [Validators.required, Validators.email, Validators.minLength(4)]],
      date: [''],
      month: [''],
      year: [''],
      password: ['', [Validators.required, Validators.minLength(4)]],
      userType: ['', [Validators.required, Validators.minLength(4)]]
    });
    
    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    this.years = [1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000]
  }

  validateUserDetails(){
    // will add logic to send form data
  }

}
