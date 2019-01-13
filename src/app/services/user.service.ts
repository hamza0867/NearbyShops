import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { Subject } from "rxjs";
import { Shop } from "../models/shop";
import {
    HttpClient,
    HttpParams,
    HttpHeaders,
    HttpResponse
} from "@angular/common/http";

@Injectable()
export class UserService {
    private user: User;
    usersSubject = new Subject<User>();
    private serverUrl = "http://localhost:8080/nbshops/";
    constructor(private httpClient: HttpClient) {}

    emitUer() {
        this.usersSubject.next(this.user);
    }

    public async addUser(username: string, pwd: string) {
        const serviceUrl = this.serverUrl + "users/new";
        const headers = new HttpHeaders({
            "Content-Type": "application/x-www-form-urlencoded"
        });
        const body = new HttpParams()
            .set("userName", username)
            .set("pass", pwd);
        let result = await this.httpClient
            .post(serviceUrl, body.toString(), {
                headers
            })
            .subscribe(
                res => {},
                err => {
                    console.log(err);
                }
            );
    }

    public async getUser(username: string, pwd: string): Promise<any> {
        const serviceUrl = this.serverUrl + "user/";
        const headers = new HttpHeaders({
            "Content-Type": "application/x-www-form-urlencoded"
        });
        const body = new HttpParams()
            .set("userName", username)
            .set("pass", pwd);
        let result = await this.httpClient
            .post(serviceUrl, body.toString(), {
                headers
            })
            .toPromise()
            .then(res => {
                return res;
            });
        return result;
    }
}
