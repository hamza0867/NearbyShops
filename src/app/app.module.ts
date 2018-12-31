import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ShopService } from "./services/shop.service";
import { ShopComponent } from "./shop/shop.component";
import { ShopsViewComponent } from "./shops-view/shops-view.component";
import { AuthService } from "./services/auth.service";
import { AuthViewComponent } from "./auth-view/auth-view.component";

const appRoutes: Routes = [
    { path: "shops", component: ShopsViewComponent },
    { path: "", component: AuthViewComponent },
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
    providers: [ShopService, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {}
