import { NgModule } from '@angular/core';

import { RoomRoutingModule, routedComponents } from './../room/room.routing.module'

import { RoomService } from '../services/room.service';

@NgModule({
    imports: [
        RoomRoutingModule
    ],
    providers: [
        RoomService
    ],
    declarations: [
        routedComponents
    ]
})

export class RoomModule { }