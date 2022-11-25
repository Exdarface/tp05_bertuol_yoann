import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Login } from '../../core/model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  formSubscription: Subscription;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.formSubscription = this.formGroup.valueChanges.subscribe(
      (value: Login) => {
        console.log(value);
      }
    );
  }

  ngOnInit(): void {}
}
