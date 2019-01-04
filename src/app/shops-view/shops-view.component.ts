import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ShopService } from "../services/shop.service";
import { Shop } from "../shop/shop";

@Component({
    selector: "app-shops-view",
    templateUrl: "./shops-view.component.html",
    styleUrls: ["./shops-view.component.scss"]
})

export class ShopsViewComponent implements OnInit, OnDestroy {
    private shops: Shop[];
    private shopSubscription: Subscription;

    constructor(private shopService: ShopService) {}

    public ngOnInit() {
        this.shopSubscription = this.shopService.shopSubject.subscribe(
            (shops: Shop[]) => {
                this.shops = shops;
            }
        );
        this.shopService.emitShopSubject();
    }

    public ngOnDestroy() {
        this.shopSubscription.unsubscribe();
    }
}
