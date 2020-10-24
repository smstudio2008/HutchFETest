import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPortalSync } from '../../interfaces/responses/PortalSync';
import { IAppUserState } from '../../store/interfaces/app.user-state';
import { getUser } from '../../store/selector/user.selector';

@Component({
    selector: 'app-user-cars',
    templateUrl: './user-cars.component.html',
    styleUrls: ['./user-cars.component.scss'],
})
export class UserCarsComponent {
    constructor(private store: Store<IAppUserState>) {}

    public userCarData: Observable<IPortalSync> = this.store.pipe(
        select(getUser)
    );
}
