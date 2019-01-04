import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { UserService } from "./services/user.service";
import { FormBuilder, ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ShopComponent } from "./shop/shop.component";
import { ShopsViewComponent } from "./shops-view/shops-view.component";
import { ShopService } from "./services/shop.service";
import { FourOhFourComponent } from "./four-oh-four/four-oh-four.component";
import { AuthService } from "../app/services/auth.service";
import { LikedShopsViewComponent } from "./liked-shops-view/liked-shops-view.component";
import { AuthGuard } from "./services/auth-guard.service";
import { RegisterComponent } from "./register/register.component";
import { RegisterService } from "./services/register.service";
import { NotAuthGuard } from "./services/not-auth-guard.service";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ShopComponent,
        ShopsViewComponent,
        FourOhFourComponent,
        LikedShopsViewComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        UserService,
        FormBuilder,
        AuthService,
        ShopService,
        AuthGuard,
        RegisterService,
        NotAuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
