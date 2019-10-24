import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared/shared.module';
import { ArrowComponent } from './arrow/arrow.component';
import { ClassComponent } from './class/class.component';
import { DestructureComponent } from './destructure/destructure.component';
import { MapsComponent } from './maps/maps.component';
import { ParametersComponent } from './parameters/parameters.component';
import { ScopeComponent } from './scope/scope.component';
import { SetsComponent } from './sets/sets.component';
import { TemplateStringsComponent } from './template-strings/template-strings.component';
import { WeakmapWeaksetComponent } from './weakmap-weakset/weakmap-weakset.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { EmailLoginComponent } from './email-login/email-login.component';




@NgModule({
  declarations: [
    ArrowComponent, ClassComponent, DestructureComponent, MapsComponent, 
    ParametersComponent, ScopeComponent, SetsComponent, TemplateStringsComponent, 
    WeakmapWeaksetComponent, LoginPageComponent, EmailLoginComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ArrowComponent,
    ClassComponent,
    DestructureComponent,
    MapsComponent,
    ParametersComponent,
    ScopeComponent,
    SetsComponent,
    TemplateStringsComponent,
    WeakmapWeaksetComponent,
  ]
})
export class FunFactsModule { }
