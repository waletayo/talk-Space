import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {LoginPage} from "../pages/login/login";
import { MyApp } from './app.component';
import {SignupPage} from "../pages/signup/signup";
import {LoggedInPage} from "../pages/logged-in/logged-in";
import {IprofilePage} from "../pages/iprofile/iprofile";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    LoggedInPage,
    IprofilePage,


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    LoggedInPage,
    IprofilePage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
