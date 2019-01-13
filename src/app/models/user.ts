import { Shop } from "./shop";

export class User {
    constructor(
        public userName: string,
        public pass: string,
        public likedShops: Shop[],
        public dislikedShops: Shop[]
    ) {}
}
