import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormStateService } from '../../../../core/services/form-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-details',
  standalone: false,

  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.scss',
})
export class PersonalDetailsComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formStateService: FormStateService, private router: Router
  ) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: [''],
      phoneNumber: [
        '',
        [, Validators.pattern(/^[+]?[0-9]{10,14}$/)],
      ],
    });
  }

  ngOnInit(): void {
    const savedData = this.formStateService.getFormData().personalDetails;
    if (savedData) {
      this.form.patchValue(savedData);
    }
    this.form.valueChanges.subscribe((value) => {
      this.formStateService.updateFormData('personalDetails', value);
    });
  }

  NextStep() {
    if (this.form.valid) {
      this.router.navigate(['/security-questions']);
    } else {
      this.form.markAllAsTouched();
    }
  }
  PreviousStep() {
    this.router.navigate(['/account-info']);

  }


}
