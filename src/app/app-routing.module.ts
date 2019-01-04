import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "../app/login/login.component";
import { ShopsViewComponent } from "../app/shops-view/shops-view.component";
import { FourOhFourComponent } from "../app/four-oh-four/four-oh-four.component";
import { LikedShopsViewComponent } from "../app/liked-shops-view/liked-shops-view.component";
import { AuthGuard } from "./services/auth-guard.service";
import { RegisterComponent } from "./register/register.component";
import { NotAuthGuard } from "./services/not-auth-guard.service";

const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "login", component: LoginComponent },
    { path: "shops", component: ShopsViewComponent },
    {
        path: "register",
        canActivate: [NotAuthGuard],
        component: RegisterComponent
    },
    {
        path: "likedShops",
        canActivate: [AuthGuard],
        component: LikedShopsViewComponent
    },
    { path: "**", component: FourOhFourComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
