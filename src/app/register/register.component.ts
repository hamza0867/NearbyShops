import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { User } from "../models/user";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { RegisterService } from "../services/register.service";
import { Md5 } from "ts-md5/dist/md5";

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
        const pass = Md5.hashStr(formValue["pass"]).toString();
        if (this.registerService.register(userName, pass)) {
            this.router.navigate(["/login"]);
        }
    }
}
