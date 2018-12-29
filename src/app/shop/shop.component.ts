import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-shop",
    styleUrls: ["./shop.component.scss"],
    templateUrl: "./shop.component.html"
})
export class ShopComponent implements OnInit {
    @Input() public shopName: string;
    @Input() public displayName: string;
    @Input() public imgSrc: string;
    @Input() public liked: boolean;
    @Input() public disliked: boolean;
    @Input() public id: string;

    constructor() {}

    public ngOnInit() {
        this.displayName = this.shopName;
        this.liked = false;
        this.disliked = false;
    }

    public onLike() {
        if (!this.liked) {
            this.liked = true;
            this.disliked = false;
            this.displayName = "Liked " + this.shopName;
        } else {
            this.liked = false;
            this.displayName = this.shopName;
        }
    }

    public onDislike() {
        if (!this.disliked) {
            this.disliked = true;
            this.liked = false;
            this.displayName = "Disliked " + this.shopName;
        } else {
            this.liked = false;
            this.displayName = this.shopName;
        }
    }
}
