import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: false,

  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss',
})
export class AuthLayoutComponent {
  steps = [
    { label: 'Account Information', route: '/account-info' },
    { label: 'Personal Information', route: '/personal-info' },
    { label: 'Security Questions', route: '/security-questions' },
    { label: 'Review', route: '/review' },
  ];

  currentStep: number = 1;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateCurrentStep(event.urlAfterRedirects);
      }
    });
  }

  private updateCurrentStep(currentRoute: string): void {
    const matchedStepIndex = this.steps.findIndex((step) =>
      currentRoute.startsWith(step.route)
    );
    if (matchedStepIndex !== -1) {
      this.currentStep = matchedStepIndex + 1;
    } else {
      this.currentStep = 1; 
    }
  }
}
