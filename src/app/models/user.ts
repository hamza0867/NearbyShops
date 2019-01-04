import { Shop } from "../shop/shop";

export class User {
    constructor(
        public userName: string,
        public pass: string,
        private likedShops: Shop[],
        private dislikedShops: Shop[]
    ) {}

    public likeShop(shop: Shop) {
        this.likedShops.push(shop);
    }

    public dislikeShop(shop: Shop) {
        this.dislikedShops.push(shop);
    }

    public getLikedShops() {
        return this.likedShops.slice();
    }

    public getDislikedShops() {
        return this.dislikedShops.slice();
    }
}
