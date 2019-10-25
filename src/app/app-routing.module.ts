import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArrowComponent } from './fun-facts/arrow/arrow.component';
import { ClassComponent } from './fun-facts/class/class.component';
import { DestructureComponent } from './fun-facts/destructure/destructure.component';
import { MapsComponent } from './fun-facts/maps/maps.component';
import { ParametersComponent } from './fun-facts/parameters/parameters.component';
import { ScopeComponent } from './fun-facts/scope/scope.component'
import { SetsComponent } from './fun-facts/sets/sets.component';
import { TemplateStringsComponent } from './fun-facts/template-strings/template-strings.component';
import { WeakmapWeaksetComponent } from './fun-facts/weakmap-weakset/weakmap-weakset.component';

const routes: Routes = [
  {
    path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'arrow', component: ArrowComponent,
  },
  {
    path: 'class', component: ClassComponent
  },
  {
    path: 'destructure', component: DestructureComponent
  },
  {
    path: 'maps', component: MapsComponent
  },
  {
    path: 'parameters', component: ParametersComponent
  },
  {
    path: 'scope', component: ScopeComponent
  },
  {
    path: 'sets', component: SetsComponent
  },
  {
    path: 'template-strings', component: TemplateStringsComponent
  },
  {
    path: 'weakmap-weaktest', component: WeakmapWeaksetComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
