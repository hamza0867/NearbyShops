import { Component, Input, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";

@Component({
    selector: "app-shop",
    styleUrls: ["./shop.component.scss"],
    templateUrl: "./shop.component.html"
})
export class ShopComponent implements OnInit {
    @Input() public shopName: string;
    @Input() public imgSrc: string;
    @Input() public id: string;

    constructor(public userService: UserService) {}

    public ngOnInit() {}

    public onLike() {}

    public onDislike() {}
}
