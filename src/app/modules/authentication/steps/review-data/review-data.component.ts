import { Component } from '@angular/core';
import { FormStateService } from '../../../../core/services/form-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-data',
  standalone: false,

  templateUrl: './review-data.component.html',
  styleUrl: './review-data.component.scss',
})
export class ReviewDataComponent {
  userData: any;
  currentTab: string = 'review';
  constructor(
    private formStateService: FormStateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userData = this.formStateService.getFormData();
  }

  PreviousStep() {
    this.router.navigate(['/security-questions']);
  }

  SubmitForm() {
    this.currentTab = 'completed';
    this.formStateService.clearFormData();
  }

  registerAgain() {
    this.router.navigate(['/account-info']);
  }
}
