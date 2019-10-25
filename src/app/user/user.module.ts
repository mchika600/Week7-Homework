import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserRoutingModule } from './user-routing/user-routing.module';
import { GoogleSigninDirective } from './google-signin.directive';


@NgModule({
  declarations: [LoginPageComponent, GoogleSigninDirective],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
