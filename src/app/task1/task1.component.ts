import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Lemer } from './shared/models/lemer';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})
export class Task1Component implements OnInit {
  public form: FormGroup;
  public lemer = new Lemer(1000000, 999983, 995117, 997573);

  public formErrors = {
    n: '',
    m: '',
    x0: '',
    a: ''
  };

  validationMessages = {
    n: {
      required: 'Required field.',
    },
    m: {
      required: 'Required field.',
    },
    x0: {
      required: 'Required field.',
    },
    a: {
      required: 'Required field.',
    },
    c: {
      required: 'Required field.',
    }
  };

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  public onSubmit() {
    const { n, m, x0, a, c } = this.form.value;
    this.router.navigate(['/result'], { queryParams: {
      n,
      m,
      x0,
      a
    }});
  }

  private buildForm() {
    this.form = this.fb.group({
      n: [this.lemer.n, [
        Validators.required
      ]],
      m: [this.lemer.m, [
        Validators.required
      ]],
      x0: [this.lemer.x0, [
        Validators.required
      ]],
      a: [this.lemer.a, [
        Validators.required
      ]],
    });

    this.form.valueChanges
      .subscribe(data => this.onValueChange(data));
  }

  private onValueChange(data?: any) {
    if (!this.form) {
      return;
    }
    const userForm = this.form;

    for (const field in this.formErrors) {

      if (this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = '';

        const control = userForm.get(field);
        if (control && control.dirty && !control.valid) {

          const message = this.validationMessages[field];
          for (const key in control.errors) {

            if (this.formErrors.hasOwnProperty(field)) {
              this.formErrors[field] += message[key] + ' ';
            }
          }
        }
      }
    }
  }

}
