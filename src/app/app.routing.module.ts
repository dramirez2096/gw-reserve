import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";

import { WelcomeComponent } from './welcome/welcome.component';

const routes: Route[] = [
    {
        path: "welcome",
        component: WelcomeComponent
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
    imports: [ RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [ WelcomeComponent ]
