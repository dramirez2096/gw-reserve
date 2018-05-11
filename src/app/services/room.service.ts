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
            id : "1",
            title: "starfox",
            picture: "starfox.jpg"
        },
        {
            id : "2",
            title: "halo",
            picture: "halo.jpg"
        },
        {
            id : "3",
            title: "sonic",
            picture: "sonic.jpg"
        },
        {
            id : "4",
            title: "zelda",
            picture: "zelda.jpg"
        }
        ]);
    }
}