import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormStateService {
  private readonly storageKey = 'SBmultiStepFormData';

  private formData = new BehaviorSubject<any>(
    this.getFromLocalStorage() || {
      accountInfo: { username: '', email: '', password: '' },
      personalDetails: {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        phoneNumber: '',
      },
      securityQuestions: {
        question1: '',
        answer1: '',
        question2: '',
        answer2: '',
      },
    }
  );

  formData$ = this.formData.asObservable();

  constructor() {}

  updateFormData(section: string, data: any): void {
    const currentData = this.formData.value;
    currentData[section] = { ...currentData[section], ...data };
    this.formData.next(currentData);
    this.saveToLocalStorage(currentData);
  }

  getFormData(): any {
    return this.formData.value;
  }

  private saveToLocalStorage(data: any): void {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  private getFromLocalStorage(): any {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : null;
  }

  clearFormData(): void {
    localStorage.removeItem(this.storageKey);
    this.formData.next({
      accountInfo: { username: '', email: '', password: '' },
      personalDetails: {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        phoneNumber: '',
      },
      securityQuestions: {
        question1: '',
        answer1: '',
        question2: '',
        answer2: '',
      },
    });
  }
}
