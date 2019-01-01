import { Component, Input, OnInit } from "@angular/core";
import { ShopService } from "../services/shop.service";

@Component({
    selector: "app-shop",
    styleUrls: ["./shop.component.scss"],
    templateUrl: "./shop.component.html"
})
export class ShopComponent implements OnInit {
    @Input() public shopName: string;
    @Input() public imgSrc: string;
    @Input() public id: string;
    @Input() public liked: boolean;
    @Input() public disliked: boolean;

    constructor(private shopService: ShopService) {}

    public ngOnInit() {}

    public onLike() {
        this.shopService.like(this.id);
    }

    public onDislike() {
        this.shopService.dislike(this.id);
    }
}
