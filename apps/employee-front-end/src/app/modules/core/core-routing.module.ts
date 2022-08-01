import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {path:'', component:HomePageComponent},
  {path:'home', component:HomePageComponent},
  {path:'about', component:AboutPageComponent},
  {path:'**', component:ErrorPageComponent},
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
