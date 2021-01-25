import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { HomeComponent } from './components/home/home.component';
import { PricingsComponent } from './components/pricings/pricings.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full",
  }
  ,
  {
    path:"Pricings",
    component:PricingsComponent,
    pathMatch:"full",
  }
  ,
  {
    path:"About",
    component:AboutComponent,
    pathMatch:"full",
  }
  ,
  {
    path:"Blogs",
    component:BlogsComponent,
    pathMatch:"full",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
