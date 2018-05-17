import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

// importing an observable method
import { of } from "rxjs/observable/of";

import { IRoom } from '../../interfaces/IRoom';


@Injectable()
export class RoomService{
    public rooms: Observable<IRoom[]>;
    
    constructor() {
        this.rooms = of([{
            id : "Starfox",
            title: "Starfox",
            picture: "starfox.jpg"
        },
        {
            id : "Halo",
            title: "Halo",
            picture: "halo.jpg"
        },
        {
            id : "Sonic",
            title: "Sonic",
            picture: "sonic.jpg"
        },
        {
            id : "Zelda",
            title: "Zelda",
            picture: "zelda.jpg"
        }
        ]);
    }

    writeRoomReservation(roomId, reservation) {
        console.log('Reserve!');
    }
    deleteRoomReservation() {
        console.log('Reserve deleted');
    }

}