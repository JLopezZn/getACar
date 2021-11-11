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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputComponent,
    FormComponent,
    RegisterComponent,
    CarouselComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    I18nModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
