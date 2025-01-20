import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
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
    private formStateService: FormStateService,
    private router: Router
  ) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', this.dateOfBirthValidator],
      phoneNumber: ['', [, Validators.pattern(/^[+]?[0-9]{10,14}$/)]],
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

  dateOfBirthValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    if (!control.value) return null; 

    const enteredDate = new Date(control.value);
    const currentDate = new Date();

    // Check if the date is in the future
    if (enteredDate > currentDate) {
      return { futureDate: true };
    }
    // Check if the user is at least 18 years old
    const age = currentDate.getFullYear() - enteredDate.getFullYear();
    const monthDiff = currentDate.getMonth() - enteredDate.getMonth();
    const dayDiff = currentDate.getDate() - enteredDate.getDate();
    if (
      age < 18 ||
      (age === 18 && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)))
    ) {
      return { underage: true };
    }

    return null;
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
