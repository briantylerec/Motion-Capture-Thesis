import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadComponent } from './download/download.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PresentationComponent } from './presentation/presentation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'evaluation', component: EvaluationComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'form', component: FormComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'download', component: DownloadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
