import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavComponent } from './nav/nav.components';
import { LoginComponent } from './login/login.component';
import { ZeldaComponent } from './rooms/zelda/zelda.component';
import { SimComponent } from './rooms/sim/sim.component';
import { DkComponent } from './rooms/dk/dk.component';
import { HaloComponent } from './rooms/halo/halo.component';

const routes: Route[] = [
    {
        component: WelcomeComponent,
        path: "welcome"
    },
    {
        component: ZeldaComponent,
        path: "zelda"
    },
    {
        component: DkComponent,
        path: "donkey_kong"
    },
    {
        component: HaloComponent,
        path: "halo"
    },
    {
        component: SimComponent,
        path: "sim_city"
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
        ZeldaComponent,
        SimComponent,
        DkComponent,
        HaloComponent //telling angular about the component 
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
