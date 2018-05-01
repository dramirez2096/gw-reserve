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
            label: "DK",
            url: "/"
        },
        {
            label: "Halo",
            url: "/test"
        },
        {
            label: "Zelda",
            url: "/test"
        },
        {
            label: "Sim City",
            url: "/test"
        }
        ];
    }

    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
}