import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { GotyComponent } from './pages/goty/goty.component';

const routes: Routes = [
  { path:'home', component:HomepageComponent },
  { path:'goty', component:GotyComponent },
  { path:'**', pathMatch:'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
