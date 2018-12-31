import { Component, OnInit } from "@angular/core";
import { ShopService } from "../services/shop.service";
import { Shop } from "../shop/shop";

@Component({
    selector: "app-shops-view",
    templateUrl: "./shops-view.component.html",
    styleUrls: ["./shops-view.component.scss"]
})
export class ShopsViewComponent implements OnInit {
    public shops: Shop[];

    constructor(private shopService: ShopService) {}

    public ngOnInit() {
        this.shops = this.shopService.shops;
    }
}
