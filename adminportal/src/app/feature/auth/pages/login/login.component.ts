import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    constructor(private router: Router) { }
    public loginToken(data): void {
        const userDetail = btoa(JSON.stringify(data));

        localStorage.setItem('user-token', userDetail);

        this.router.navigateByUrl('/admin');
    }
}
