import { Subject } from "rxjs";
import { Shop } from "../shop/shop";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class LikedShopsService {
    public shopSubject = new Subject<Shop[]>();
    private shops: Shop[];

    constructor(private authService: AuthService) {
        this.shops = this.authService.getLikedShops();
        this.emitShopSubject();
    }

    public emitShopSubject() {
        this.shopSubject.next(this.shops.slice());
    }

    public like(id: string) {
        this.shops.find(item => item.id === id).like();
        this.emitShopSubject();
    }

    public dislike(id: string) {
        this.shops.find(item => item.id === id).dislike();
        this.emitShopSubject();
    }
}
