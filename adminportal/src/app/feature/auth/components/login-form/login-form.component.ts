import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Output() public newUserData = new EventEmitter<object>();

  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.formValidation();
  }

  public formValidation(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public sendDetail(): void {
    const payload = {
      username: this.form.value.username,
      password: this.form.value.password,
    };

    this.checkValidForm().invalid
      ? this.submitAll()
      : this.newUserData.emit(payload);
  }

  private checkValidForm(): FormGroup {
    return this.form;
  }

  private submitAll(): void {
    Swal.fire({
      icon: 'warning',
      title: 'Something went wrong...',
      text: ' Please complete the form',
    });
  }
}