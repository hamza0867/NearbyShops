import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

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

    public onSignIn() {
        this.authService.signIn().then(() => {
            this.authStatus = this.authService.isAuth;
            this.router.navigate(["shops"]);
        });
    }

    public onSignOut() {
        this.authService.signOut();
        this.authStatus = this.authService.isAuth;
    }
}
