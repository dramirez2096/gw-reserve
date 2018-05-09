import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { INavigationItem } from './../../interfaces/INavigationItem';
import { RoomComponent } from '../room/room.component';
import { RoomService } from '../services/room.service';

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

        const roomItems: INavigationItem[] = this._roomService.rooms.map(room => {
            return{
                title: room.title,
                url: "room/" + room.id,
            }
        });
        
        roomItems.forEach(roomItem => this.menuItems.push(roomItem));
    }


    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
}