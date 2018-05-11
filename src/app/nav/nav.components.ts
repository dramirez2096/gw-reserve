import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { INavigationItem } from './../../interfaces/INavigationItem';
import { IRoom } from '../../interfaces/IRoom';
import { RoomComponent } from '../room/room.component';
import { RoomService } from '../services/room.service';

import { map } from 'rxjs/operators';

@Component({
    selector: "gw-nav",
    templateUrl: "./nav.component.html",
    styleUrls: [
        "./nav.component.scss"
    ]
})
export class NavComponent implements OnInit, OnDestroy {
    public menuItems: INavigationItem[];

    constructor(
        private _roomService: RoomService,
        private _router: Router
     ) {}

    // life cycle hook
    ngOnInit(): void {
        this.menuItems = [{
            title: 'Welcome',
            url: 'welcome'
        }]

        this._roomService.rooms.pipe(map( (room:IRoom[]) => {
            const navItems:INavigationItem[] = room.map( (eachRoom:IRoom) => {
                return{
                    title: eachRoom.title,
                    url: "room/" + eachRoom.id,
                } // end return  
            }) // end ARRAY MAP
            return navItems;
        }))
        .subscribe(newNavItems => {
            newNavItems.forEach(roomItem => this.menuItems.push(roomItem));
        })
        ;
        
        
    }


    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
}