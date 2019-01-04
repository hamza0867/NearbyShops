import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { User } from "../models/user";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { RegisterService } from "../services/register.service";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
    private userForm: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private registerService: RegisterService
    ) {
        this.initForm();
    }

    ngOnInit() {}

    initForm() {
        this.userForm = this.formBuilder.group({
            userName: ["", Validators.required],
            pass: ["", Validators.required]
        });
    }

    onSubmitForm() {
        const formValue = this.userForm.value;
        const userName = formValue["userName"];
        const pass = formValue["pass"];
        if (this.registerService.register(userName, pass)) {
            this.router.navigate(["/login"]);
        }
    }
}
