import { IPortalSync } from './../../../feature/client/modules/admin/interfaces/responses/PortalSync';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export interface MenuHeader {
    url: string;
    name: string;
}


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
    @Input() public userResult: Observable<IPortalSync[]>;
    constructor(private router: Router) {}

    public menuValues: MenuHeader[];

    ngOnInit(): void {
        this.setMenuHeader();
    }

    public setMenuHeader(): void {
        this.menuValues = [
            {
                url: 'ads',
                name: 'Ads'
            },
            {
                url: 'daily-gift',
                name: 'Daily Gift'
            },
            {
                url: 'ftue-progess',
                name: 'Ftue Progess'
            },
            {
                url: 'fuel',
                name: 'Fuel'
            },
            {
                url: 'fusion',
                name: 'Fusion'
            },
            {
                url: 'logs',
                name: 'Logs'
            },
            {
                url: 'social',
                name: 'Social'
            },
            {
                url: 'user-argumnet',
                name: 'User Argumnet'
            },
            {
                url: 'user-cars',
                name: 'User Cars'
            },
            {
                url: 'user-iap',
                name: 'User Iap'
            },
            {
                url: 'user-offer',
                name: 'User Offer'
            },
            {
                url: 'user-profile',
                name: 'User Profile'
            },
            {
                url: 'user-resource',
                name: ''
            },
            {
                url: 'user-tier',
                name: ''
            },
        ];
    }
}
