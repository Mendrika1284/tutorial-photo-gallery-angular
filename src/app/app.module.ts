import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AcceuilComponent } from './acceuil/acceuil.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CameraComponent } from './camera/camera.component';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';
import { LoginComponent } from './login/login.component';
import { UtilisateurService } from './services/utilisateur.service';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CameraComponent,
    AcceuilComponent,
    SignupComponent,
    DeconnexionComponent,
    CameraComponent,],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule, FormsModule,ReactiveFormsModule],
  providers: [
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  SplashScreen,
  StatusBar,
  UtilisateurService,
],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
