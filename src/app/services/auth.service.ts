import { Injectable } from "@angular/core";
import { Shop } from "../models/shop";
import {
    HttpClient,
    HttpParams,
    HttpHeaders,
    HttpResponse
} from "@angular/common/http";
import { User } from "../models/user";
import { UserService } from "../services/user.service";
import { Subject, BehaviorSubject } from "rxjs";

@Injectable()
export class AuthService {
    private currentUser: User;
    public currentUserSubject = new BehaviorSubject<User>(this.currentUser);
    public isAuth = false;
    public authSubject = new Subject<boolean>();
    private serverUrl = "http://localhost:8080/nbshops/";

    constructor(
        private userService: UserService,
        private httpClient: HttpClient
    ) {
        this.currentUser = undefined;
        this.emitCurrentUser();
    }

    public emitAuth() {
        this.authSubject.next(this.isAuth);
    }

    public emitCurrentUser() {
        this.currentUserSubject.next(this.currentUser);
    }

    public async login(userName: string, pass: string) {
        const currentUser = this.userService.getUser(userName, pass);
        if (currentUser === undefined) {
            alert("the user " + userName + " does't exist");
            return false;
        }
        this.currentUser = await currentUser;
        this.isAuth = true;
        currentUser.then(x => {
            this.emitCurrentUser();
            console.log(this.currentUser);
        });
        this.emitAuth();
        alert("You are now connected as " + this.currentUser.userName);
        return true;
    }

    public getCurrentUser() {
        return this.currentUser;
    }

    public logOut() {
        this.currentUser = undefined;
        this.isAuth = false;
        this.emitAuth();
        this.emitCurrentUser();
    }

    public async likeShop(shop: Shop) {
        if (this.isAuth === false) {
            alert("This operation is only available for registered users");
            return;
        }
        const serviceUrl = this.serverUrl + "shops/like/";
        const headers = new HttpHeaders({
            "Content-Type": "application/x-www-form-urlencoded"
        });

        const body = new HttpParams()
            .set("userName", this.currentUser.userName)
            .set("shop", JSON.stringify(shop));
        let result = await this.httpClient
            .post(serviceUrl, body.toString(), { headers })
            .toPromise()
            .then((res: Shop[]) => res);
        return result;
    }
}
