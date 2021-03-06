import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './guards/auth.guard';
import { AlreadySignedInGuard } from './guards/already-signed-in.guard';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { SettingsComponent } from './settings/settings.component';
import { SearchComponent } from './search/search.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { FeedComponent } from './feed/feed.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RequestsComponent } from './requests/requests.component';
import { ConversationComponent } from './conversation/conversation.component';
import { MessageComposerComponent } from './message-composer/message-composer.component';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
    NavFooterComponent,
    SettingsComponent,
    SearchComponent,
    MessagesComponent,
    ProfileComponent,
    CreatePostComponent,
    FeedComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    RequestsComponent,
    ConversationComponent,
    MessageComposerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard]
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
        canActivate: [AlreadySignedInGuard]
      },
      {
        path: 'sign-in',
        component: SignInComponent,
        canActivate: [AlreadySignedInGuard]
      },
      {
        path: 'search',
        component: SearchComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'requests',
        component: RequestsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'messages',
        component: MessagesComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'user/:id',
        component: ProfileComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        canActivate: [AlreadySignedInGuard]
      },
      {
        path: 'reset-password/:id',
        component: ResetPasswordComponent,
        canActivate: [AlreadySignedInGuard]
      },
      { path: '**', redirectTo: '' }
    ]),
    BrowserAnimationsModule,
    BrowserModule,
    AngularMaterialModule
  ],
  providers: [AuthGuard, AlreadySignedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
