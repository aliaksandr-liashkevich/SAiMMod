import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EvenlyDistribution } from './shared/models/evenly-distribution';
import { ExponentialDistribution } from './shared/models';
import { GammaDistribution } from './shared/models/gamma-distribution';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component implements OnInit {
  public form: FormGroup;
  public evenlyDistribution = new EvenlyDistribution(1, 100);
  public exponentialDistribution = new ExponentialDistribution(12, 1, 20);
  public gammaDistribution = new GammaDistribution(1, 5, 6, 50);

  public formErrors = {
    evenlyA: '',
    evenlyB: '',
    exponentialL: '',
    gammaL: '',
    gammaN: '',
    gammaXMin: '',
    gammaXMax: '',
  };

  validationMessages = {
    evenlyA: {
      required: 'Required field.',
    },
    evenlyB: {
      required: 'Required field.',
    },
    exponentialL: {
      required: 'Required field',
    },
    exponentialXMin:{
      required: 'Required field',
    },
    exponentialXMax: {
      required: 'Required field',
    },
    gammaN:{
      required: 'Required field',
    },
    gammaL:{
      required: 'Required field',
    },
    gammaXMin:{
      required: 'Required field',
    },
    gammaXMax:{
      required: 'Required field',
    }
  };

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  public onSubmitEvenlyDistribution() {
    const { evenlyA, evenlyB } = this.form.value;
    this.router.navigate(['task2/result/evenly-distribution'], { queryParams: {
      evenlyA, evenlyB
    }});
  }

  public onSubmitGaussianDistribution() {
    const { evenlyA, evenlyB } = this.form.value;
    this.router.navigate(['task2/result/evenly-distribution'], { queryParams: {
      evenlyA, evenlyB
    }});
  }

  public onSubmitExponentialDistribution() {
    const { exponentialL, exponentialXMin, exponentialXMax } = this.form.value;
    this.router.navigate(['task2/result/exponential-distribution'], { queryParams: {
      exponentialL, exponentialXMin, exponentialXMax
    }});
  }

  public onSubmitGammaDistribution() {
    const { gammaL, gammaN, gammaXMin, gammaXMax } = this.form.value;
    this.router.navigate(['task2/result/gamma-distribution'], { queryParams: {
      gammaL, gammaN, gammaXMin, gammaXMax
    }});
  }

  private buildForm() {
    this.form = this.fb.group({
      evenlyA: [this.evenlyDistribution.a, [
        Validators.required
      ]],
      evenlyB: [this.evenlyDistribution.b, [
        Validators.required
      ]],
      exponentialL: [this.exponentialDistribution.l, [
        Validators.required
      ]],
      exponentialXMin: [this.exponentialDistribution.xMin, [
        Validators.required
      ]],
      exponentialXMax: [this.exponentialDistribution.xMax, [
        Validators.required
      ]],
      gammaL: [this.gammaDistribution.l, [
        Validators.required
      ]],
      gammaN: [this.gammaDistribution.n, [
        Validators.required
      ]],
      gammaXMax: [this.gammaDistribution.xMax, [
        Validators.required
      ]],
      gammaXMin: [this.gammaDistribution.xMin, [
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
