import { Subject, Subscription } from "rxjs";
import { Shop } from "../models/shop";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class LikedShopsService {
    public shopSubject = new Subject<Shop[]>();
    private likedShopsSubscription: Subscription;
    private shops: Shop[];

    constructor(private authService: AuthService) {
        this.likedShopsSubscription = this.authService.currentUserSubject.subscribe(
            usr => {
                if (usr === undefined) {
                    this.shops = [];
                } else {
                    this.shops = usr.likedShops;
                }
                this.emitShops();
            },
            err => console.log(err)
        );
    }

    public emitShops() {
        this.shopSubject.next(this.shops.slice());
    }
}
