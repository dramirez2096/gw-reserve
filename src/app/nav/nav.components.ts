import { Component, OnInit, OnDestroy } from '@angular/core';
import { INavigationItem } from './../../interfaces/INavigationItem';

@Component({
    selector: "gw-nav",
    templateUrl: "./nav.component.html",
    styleUrls: [
        "./nav.component.scss"
    ]
})
export class NavComponent implements OnInit {
    public menuItems: INavigationItem[];

    // life cycle hook
    ngOnInit(): void {
        this.menuItems = [{
            label: "test",
            url: "/"
        },
        {
            label: "another one",
            url: "/test"
        }];
    }

    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
}