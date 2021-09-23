import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignupComponent } from './signup/signup.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"products-list",
    component: ProductsListComponent
  },
  {
    path:"products-details/:id",
    component: ProductsDetailsComponent
  },
  {
    path:"signup",
    component: SignupComponent
  },
  {
    path:"registration",
    component: RegistrationComponent
  },
  {
    path:"userform",
    component: UserFormComponent
  },
  {
    path:"dashboard",
    loadChildren: () => import("./dashboard/dashboard.module").then(
      module=> module.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
