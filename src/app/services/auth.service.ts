import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { UserService } from "../services/user.service";
import { Subject } from "rxjs";

@Injectable()
export class AuthService {
    private currentUser: User;
    public isAuth = false;
    public authSubject = new Subject<boolean>();

    constructor(private userService: UserService) {}

    public emitAuth() {
        this.authSubject.next(this.isAuth);
    }

    public login(userName: string, pass: string) {
        const currentUser = this.userService.getUser(userName, pass);
        if (currentUser === undefined) {
            alert("the user " + userName + " does't exist");
            return false;
        }
        this.currentUser = currentUser;
        this.isAuth = true;
        this.emitAuth();
        alert("You are now connected as " + currentUser.userName);
        return true;
    }

    public getLikedShops() {
        return this.currentUser.getLikedShops();
    }

    public getDislikedShops() {
        return this.currentUser.getDislikedShops();
    }

    public getCurrentUser() {
        return this.currentUser;
    }

    public logOut() {
        this.currentUser = undefined;
        this.isAuth = false;
        this.emitAuth();
    }
}
