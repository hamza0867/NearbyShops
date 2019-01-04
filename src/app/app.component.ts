import { Component } from "@angular/core";
import { LikedShopsService } from "./services/liked-shops.service";
@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    providers: [LikedShopsService]
})
export class AppComponent {
    title = "NearbyShops";
    logo = "../assets/ur.png";
}
