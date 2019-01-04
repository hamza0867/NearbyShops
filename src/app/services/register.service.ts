import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { UserService } from "../services/user.service";
import { Subject } from "rxjs";

@Injectable()
export class RegisterService {
    constructor(private userService: UserService) {}

    public register(userName: string, pass: string) {
        if (this.userService.addUser(userName, pass)) {
            alert("The user " + userName + " has been successfully registered");
            return true;
        }
        alert("There already exists a user with the name ");
        return false;
    }
}
