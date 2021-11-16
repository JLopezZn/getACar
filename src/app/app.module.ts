import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { InputComponent } from './components/shared/atoms/input/input.component';
import { FormComponent } from './components/shared/templates/form/form.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { I18nModule } from './i18n/i18n.module';
import { CarouselComponent } from './components/shared/templates/carousel/carousel.component';
import { HeaderComponent } from './components/shared/templates/header/header.component';
import { HomeComponent } from './components/layout/home/home.component';
import { UserProfileComponent } from './components/layout/user-profile/user-profile.component';
import { PostsComponent } from './components/posts/posts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PostModalComponent } from './components/post-modal/post-modal.component';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputComponent,
    FormComponent,
    RegisterComponent,
    CarouselComponent,
    HeaderComponent,
    HomeComponent,
    UserProfileComponent,
    PostsComponent,
    PostModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    I18nModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
