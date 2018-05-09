import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routedComponents } from './app.routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.components';
import { LoginComponent } from './login/login.component';

import { RoomService } from './services/room.service';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent ,
        NavComponent,
        LoginComponent,
        routedComponents
    ],
    providers:[
        RoomService
    ],
    bootstrap: [
        AppComponent // choosing the file to boot
    ]
})

export class AppModule {
}
