import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { UserService } from "../services/user.service";
import { Subject } from "rxjs";

@Injectable()
export class RegisterService {
    constructor(private userService: UserService) {}

    public async register(userName: string, pass: string) {
        if ((await this.userService.addUser(userName, pass)) !== null) {
            alert("The user " + userName + " has been successfully registered");
            return true;
        }
        alert("There already exists a user with the name ");
        return false;
    }
}
