import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { FormStateService } from '../../../../core/services/form-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-security-questions',
  standalone: false,

  templateUrl: './security-questions.component.html',
  styleUrl: './security-questions.component.scss',
})
export class SecurityQuestionsComponent {
  form: FormGroup;
  securityQuestions: string[] = [
    'What is your mother’s maiden name?',
    'What was the name of your first pet?',
    'What was the first car you owned?',
    'What elementary school did you attend?',
    'What city were you born in?',
  ];

  constructor(
    private fb: FormBuilder,
    private formStateService: FormStateService, private router: Router
  ) {
    this.form = this.fb.group(
      {
        question1: ['', Validators.required],
        answer1: ['', Validators.required],
        question2: ['', Validators.required],
        answer2: ['', Validators.required],
      },
      { validators: [this.validateDifferentQuestions] } 
    );
  }

  ngOnInit(): void {
    const savedData = this.formStateService.getFormData().securityQuestions;
    if (savedData) {
      this.form.patchValue(savedData);
    }
    this.form.valueChanges.subscribe((value) => {
      this.formStateService.updateFormData('securityQuestions', value);
    });
  }

  validateDifferentQuestions(group: AbstractControl) {
    const question1 = group.get('question1')?.value;
    const question2 = group.get('question2')?.value;
    if (question1 && question2 && question1 === question2) {
      return { sameQuestions: true };
    }
    return null; // Valid
  }

 

  NextStep() {
    if (this.form.valid) {
      this.router.navigate(['/review']);
    } else {
      this.form.markAllAsTouched();
    }
  }
  PreviousStep() {
    this.router.navigate(['/personal-info']);
  }
}
