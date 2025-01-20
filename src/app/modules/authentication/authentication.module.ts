import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AccountInfoComponent } from './steps/account-info/account-info.component';
import { PersonalDetailsComponent } from './steps/personal-details/personal-details.component';
import { SecurityQuestionsComponent } from './steps/security-questions/security-questions.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { ReviewDataComponent } from './steps/review-data/review-data.component';


@NgModule({
  declarations: [
    AccountInfoComponent,
    PersonalDetailsComponent,
    SecurityQuestionsComponent,
    AuthLayoutComponent,
    ReviewDataComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
