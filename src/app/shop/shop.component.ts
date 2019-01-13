import { Component, Input, OnInit } from "@angular/core";
import { Shop } from "../models/shop";
import { AuthService } from "../services/auth.service";

@Component({
    selector: "app-shop",
    styleUrls: ["./shop.component.scss"],
    templateUrl: "./shop.component.html"
})
export class ShopComponent implements OnInit {
    @Input() public shopName: string;
    @Input() public imgSrc: string;
    @Input() public id: string;

    constructor(private authService: AuthService) {}

    public ngOnInit() {}

    public onLike() {
        this.authService.likeShop(
            new Shop(this.shopName, this.imgSrc, this.id)
        );
    }

    public onDislike() {}
}
