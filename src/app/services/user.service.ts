import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { User } from "../models/user";
import { Subject, Subscription } from "rxjs";
import { Shop } from "../models/shop";
import {
    HttpClient,
    HttpParams,
    HttpHeaders,
    HttpResponse
} from "@angular/common/http";

@Injectable()
export class UserService {
    private serverUrl = "http://localhost:8080/nbshops/";
    private currentUserSubscription: Subscription;
    constructor(private httpClient: HttpClient) {}

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
            .toPromise()
            .then(x => x);
        return result;
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
