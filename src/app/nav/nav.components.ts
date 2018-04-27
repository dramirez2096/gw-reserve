import { Component, OnInit, OnDestroy } from '@angular/core';
import { INavigationItem } from './../../interfaces/INavigationItem';

@Component({
    selector: "gw-nav",
    templateUrl: "./nav.component.html",
    styleUrls: [
        "./nav.component.scss"
    ]
})
export class NavComponent implements OnInit, OnDestroy {
    public menuItems: INavigationItem[];

    // life cycle hook
    ngOnInit(): void {
        this.menuItems = [{
            label: "Room 1",
            url: "/"
        },
        {
            label: "Room 2",
            url: "/test"
        },
        {
            label: "Room 3",
            url: "/test"
        }];
    }

    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
}