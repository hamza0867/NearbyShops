import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ShopService } from "./services/shop.service";
import { ShopComponent } from "./shop/shop.component";

@NgModule({
    declarations: [AppComponent, ShopComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [ShopService],
    bootstrap: [AppComponent]
})
export class AppModule {}
