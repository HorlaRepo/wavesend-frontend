import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { FeesComponent } from './components/fees/fees.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HelpComponent } from './components/help/help.component';
//import { authGuard } from './services/authguard/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'login', component: LoginComponent},
  { path: 'fees', component: FeesComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'help', component: HelpComponent},
  //{ path: 'account', loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule), canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
