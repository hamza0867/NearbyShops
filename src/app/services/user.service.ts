import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { Subject } from "rxjs";
import { Shop } from "../shop/shop";

@Injectable()
export class UserService {
    private users: User[] = [
        new User(
            "hamza",
            "hamza",
            [new Shop("A Shop", "../../assets/ur.png", "1")],
            []
        )
    ];
    usersSubject = new Subject<User[]>();
    constructor() {}

    emitUers() {
        this.usersSubject.next(this.users.slice());
    }

    public addUser(userName: string, pass: string) {
        if (this.users.find(user => user.userName === userName) === undefined) {
            this.users.push(new User(userName, pass, [], []));
            this.emitUers();
            return true;
        }
        return false;
    }

    public getUser(userName: string, pass: string) {
        return this.users.find(
            usr => usr.userName === userName && usr.pass === pass
        );
    }
}
