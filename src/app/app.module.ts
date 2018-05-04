import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavComponent } from './nav/nav.components';
import { LoginComponent } from './login/login.component';
import { RoomComponent } from './room/room.component';

const routes: Route[] = [
    {
        path: "welcome",
        component: WelcomeComponent
    },
    {
        path: "room/:id",
        component: RoomComponent
    },
    {
        path: "",
        redirectTo: "welcome",
        pathMatch: "full"
    },
    {
        path: "**",
        component: WelcomeComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        NavComponent,
        LoginComponent,
        RoomComponent //telling angular about the component 
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    bootstrap: [
        AppComponent // choosing the file to boot
    ]
})
export class AppModule{
}
