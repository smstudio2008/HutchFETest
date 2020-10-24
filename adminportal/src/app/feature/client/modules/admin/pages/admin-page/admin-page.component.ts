import { getUser } from './../../store/selector/user.selector';
import { IPortalSync } from './../../interfaces/responses/PortalSync';
import * as userActions from './../../store/actions/user.actions';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IAppUserState } from '../../store/interfaces/app.user-state';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-admin-page',
    templateUrl: './admin-page.component.html',
    styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
    constructor(private store: Store<IAppUserState>) {}



    ngOnInit(): void {
        this.getUserDatafromStore();
    }

    public getUserDatafromStore(): void {
        this.store.dispatch(new userActions.LoadUser());
    }
}
