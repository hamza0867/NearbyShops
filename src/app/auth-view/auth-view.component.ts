import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
    selector: "app-auth-view",
    templateUrl: "./auth-view.component.html",
    styleUrls: ["./auth-view.component.scss"]
})
export class AuthViewComponent implements OnInit {
    public authStatus;
    constructor(private authService: AuthService, private router: Router) {}

    public ngOnInit() {
        this.authStatus = this.authService.isAuth;
    }

    public async onSignIn(form: NgForm) {
        const userName = form.value.userName;
        const pass = form.value.pass;
        await this.authService.signIn(userName, pass);
        this.authStatus = this.authService.isAuth;
        this.router.navigate(["shops"]);
    }

    public onSignOut() {
        this.authService.signOut();
        this.authStatus = this.authService.isAuth;
    }
}
