import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routedComponents } from './app.routing.module';
import { RoomModule } from "./room/room.module";

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.components';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';
import { RoomService } from "./services/room.service";


@NgModule({
    imports: [
        BrowserModule,
        RoomModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        FormsModule
    ],
    declarations: [
        AppComponent ,
        NavComponent,
        LoginComponent,
        routedComponents
    ],
    providers: [
        AngularFireAuth,
        RoomService
    ],
    bootstrap: [
        AppComponent // choosing the file to boot
    ]
})

export class AppModule {
}
