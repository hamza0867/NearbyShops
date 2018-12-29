import { Component, OnInit } from "@angular/core";
import { ShopService } from "./services/shop.service";
import { Shop } from "./shop/shop";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
    public title = "NearbyShops";
    public logo = "../assets/ur.png";
    public shops: Shop[];

    constructor(private shopService: ShopService) {}

    public ngOnInit() {
        this.shops = this.shopService.shops;
    }
}
