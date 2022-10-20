// core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectComponent } from './pages/project/project.component';

const routes: Routes = [
  { path:'', component: PortfolioComponent },
  { path:'about', component: AboutComponent },
  { path:'project', component: ProjectComponent },
  { path:'**', pathMatch:'full', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
