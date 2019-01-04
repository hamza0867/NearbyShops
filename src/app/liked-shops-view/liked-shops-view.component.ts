import { Component, OnInit } from "@angular/core";
import { Shop } from "../shop/shop";
import { Subscription } from "rxjs";
import { LikedShopsService } from "../services/liked-shops.service";

@Component({
    selector: "app-liked-shops-view",
    templateUrl: "./liked-shops-view.component.html",
    styleUrls: ["./liked-shops-view.component.scss"]
})
export class LikedShopsViewComponent implements OnInit {
    private likedShops: Shop[] = [];
    private likedShopSubscription: Subscription;

    constructor(private likedShopsService: LikedShopsService) {}

    ngOnInit() {
        this.likedShopSubscription = this.likedShopsService.shopSubject.subscribe(
            (shops: Shop[]) => {
                this.likedShops = shops;
            }
        );
        this.likedShopsService.emitShopSubject();
    }
}
