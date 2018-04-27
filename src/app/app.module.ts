import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavComponent } from './nav/nav.components';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        NavComponent,
        LoginComponent //telling angular about the component 
    ],
    imports: [
        BrowserModule
    ],
    bootstrap: [
        AppComponent // choosing the file to boot
    ]
})
export class AppModule{
}
