import { IPortalSync } from './../../../feature/client/modules/admin/interfaces/responses/PortalSync';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
    @Input() public userResult: Observable<IPortalSync[]>;
    constructor(private router: Router) {}

    ngOnInit(): void {}
}
