import { Component, OnInit } from "@angular/core";
import { ShopComponent } from "./shop/shop.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
    public title = "NearbyShops";
    public logo = "../assets/ur.png";

    constructor() {}

    public ngOnInit() {}
}
