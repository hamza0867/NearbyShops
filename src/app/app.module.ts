import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthViewComponent } from "./auth-view/auth-view.component";
import { FourOhFourComponent } from "./four-oh-four/four-oh-four.component";
import { AuthGuard } from "./services/auth-guard.service";
import { AuthService } from "./services/auth.service";
import { ShopService } from "./services/shop.service";
import { ShopComponent } from "./shop/shop.component";
import { ShopsViewComponent } from "./shops-view/shops-view.component";

const appRoutes: Routes = [
    { path: "shops", canActivate: [AuthGuard], component: ShopsViewComponent },
    { path: "auth", component: AuthViewComponent },
    { path: "", component: AuthViewComponent },
    { path: "not-found", component: FourOhFourComponent },
    { path: "**", redirectTo: "/not-found" }
];

@NgModule({
    declarations: [
        AppComponent,
        ShopComponent,
        ShopsViewComponent,
        AuthViewComponent,
        FourOhFourComponent
    ],
    imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
    providers: [ShopService, AuthService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
