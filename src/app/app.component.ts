import { Component } from "@angular/core";
import { User } from "./models/user";
import { AuthService } from "./services/auth.service";
import { Subscription, Subject } from "rxjs";
@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    title = "NearbyShops";
    logo = "../assets/ur.png";
    public currentUserSubject = new Subject<User>();
    private currentUserSubscription: Subscription;

    constructor(private authService: AuthService) {
        this.currentUserSubscription = this.authService.currentUserSubject.subscribe(
            usr => {
                this.currentUserSubject.next(usr);
            },
            err => console.log(err)
        );
    }
}
