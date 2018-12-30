import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthViewComponent } from "./auth-view/auth-view.component";
import { ShopService } from "./services/shop.service";
import { ShopComponent } from "./shop/shop.component";
import { ShopsViewComponent } from "./shops-view/shops-view.component";

const appRoutes: Routes = [
    { path: "shops", component: ShopsViewComponent },
    { path: "", component: ShopsViewComponent },
    { path: "auth", component: AuthViewComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        ShopComponent,
        ShopsViewComponent,
        AuthViewComponent
    ],
    imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
    providers: [ShopService],
    bootstrap: [AppComponent]
})
export class AppModule {}
