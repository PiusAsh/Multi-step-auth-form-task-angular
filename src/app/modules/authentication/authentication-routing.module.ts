import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { PersonalDetailsComponent } from './steps/personal-details/personal-details.component';
import { AccountInfoComponent } from './steps/account-info/account-info.component';
import { SecurityQuestionsComponent } from './steps/security-questions/security-questions.component';
import { ReviewDataComponent } from './steps/review-data/review-data.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'account-info', pathMatch: 'full' },
      { path: 'account-info', component: AccountInfoComponent },
      { path: 'personal-info', component: PersonalDetailsComponent },
      { path: 'security-questions', component: SecurityQuestionsComponent },
      { path: 'review', component: ReviewDataComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
