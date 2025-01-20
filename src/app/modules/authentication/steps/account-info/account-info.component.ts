import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormStateService } from '../../../../core/services/form-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-info',
  standalone: false,

  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.scss',
})
export class AccountInfoComponent implements OnInit {
  form: FormGroup;
  openPassword: boolean = false;
  openPasswordConfirm: boolean = false;

  constructor(
    private fb: FormBuilder,
    private formStateService: FormStateService, private router: Router
  ) {
    this.form = fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/
            ),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  ngOnInit(): void {
    const savedData = this.formStateService.getFormData().accountInfo;
    if (savedData) {
      this.form.patchValue(savedData);
    }
    this.form.valueChanges.subscribe((value) => {
      this.formStateService.updateFormData('accountInfo', value);
    });
  }

  togglePassword() {
    this.openPassword = !this.openPassword;
  }

  togglePasswordConfirm() {
    this.openPasswordConfirm = !this.openPasswordConfirm;
  }

  private passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  NextStep() {
    if (this.form.valid) {
      this.router.navigate(['/personal-info']);
    } else {
      
      this.form.markAllAsTouched();
    }
  }
}