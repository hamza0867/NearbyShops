import { Subject } from "rxjs";
import { User } from "../models/user.model";

export class UserService {
    public userSubject = new Subject<User[]>();
    private users: User[] = [];

    public emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    public addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}
