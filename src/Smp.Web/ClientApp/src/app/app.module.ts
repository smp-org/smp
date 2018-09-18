import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './guards/auth.guard';
import { AlreadySignedInGuard } from './guards/already-signed-in.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    SignUpComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
      { path: 'counter', component: CounterComponent, canActivate: [AuthGuard] },
      { path: 'sign-up', component: SignUpComponent, canActivate: [AlreadySignedInGuard] },
      { path: 'sign-in', component: SignInComponent, canActivate: [AlreadySignedInGuard] },
      { path: '**', redirectTo: '' }
    ])
  ],
  providers: [
    AuthGuard,
    AlreadySignedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
