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
            url: "donkey_kong"
        },
        {
            label: "Halo",
            url: "halo"
        },
        {
            label: "Zelda",
            url: "zelda"
        },
        {
            label: "Sim City",
            url: "sim_city"
        }
        ];
    }

    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
}