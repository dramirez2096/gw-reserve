import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routedComponents } from './app.routing.module';
import { RoomModule } from "./room/room.module";

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.components';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        BrowserModule,
        RoomModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent ,
        NavComponent,
        LoginComponent,
        routedComponents
    ],
    bootstrap: [
        AppComponent // choosing the file to boot
    ]
})

export class AppModule {
}
