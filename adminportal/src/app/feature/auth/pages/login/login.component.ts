import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    public loginToken(data): void {
        const userDetail = btoa(JSON.stringify(data));

        localStorage.setItem('user-token', userDetail);
    }
}
