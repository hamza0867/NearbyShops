import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { User } from "../models/user";
import { AuthService } from "../services/auth.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit, OnDestroy {
    private userForm: FormGroup;
    private isAuth: boolean;
    private isAuthSubscription: Subscription;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {
        this.initForm();
    }

    ngOnInit() {
        this.isAuthSubscription = this.authService.authSubject.subscribe(
            isAuth => {
                this.isAuth = isAuth;
            }
        );
        this.authService.emitAuth();
    }

    initForm() {
        this.userForm = this.formBuilder.group({
            userName: ["", Validators.required],
            pass: ["", Validators.required]
        });
    }

    onSubmitForm() {
        const formValue = this.userForm.value;
        if (this.authService.login(formValue["userName"], formValue["pass"])) {
            this.router.navigate(["/shops"]);
        }
    }

    onLogOut() {
        this.authService.logOut();
    }

    ngOnDestroy() {
        this.isAuthSubscription.unsubscribe();
    }
}
