import { NgModule } from '@angular/core';

import { RoomRoutingModule, routedComponents } from './../room/room.routing.module'

import { RoomService } from '../services/room.service';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        RoomRoutingModule,
        FormsModule,
        CommonModule
    ],
    providers: [
        RoomService
    ],
    declarations: [
        routedComponents
    ]
})

export class RoomModule { }