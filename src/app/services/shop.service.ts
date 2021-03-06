import { Subject, Subscription, BehaviorSubject } from "rxjs";
import { Shop } from "../models/shop";
import { Injectable } from "@angular/core";
import { LikedShopsService } from "./liked-shops.service";

@Injectable()
export class ShopService {
    public shopSubject;
    private likedShopsSubscription: Subscription;
    private originalList: Shop[];
    private shops: Shop[];

    constructor(private likedShopService: LikedShopsService) {
        this.fillShops().then(x => {
            this.originalList = x;
        });
        this.shopSubject = new BehaviorSubject<Shop[]>(this.shops);
        this.likedShopsSubscription = this.likedShopService.shopSubject.subscribe(
            likedShops => {
                this.updateShops(likedShops);
                this.emitShopSubject();
            }
        );
    }

    private async updateShops(likedShops: Shop[]) {
        function removeLiked(original, toRemove) {
            function removeOne(arr, elt) {
                return arr.filter(el => el.id !== elt.id);
            }
            let res = original;
            toRemove.forEach(elt => (res = removeOne(res, elt)));
            return res;
        }
        this.shops = removeLiked(this.originalList, likedShops);
    }

    private async fillShops() {
        this.shops = [];
        this.getLocation()
            .then(result => this.getFullUrl(result))
            .then(result =>
                fetch(result)
                    .then(resp => resp.json())
                    .then(json => json.results.items)
                    .then(items =>
                        items.map(item => {
                            return {
                                name: item.title,
                                imgSrc: item.icon,
                                id: item.id
                            };
                        })
                    )
                    .then(items => {
                        items.forEach(item =>
                            this.shops.push(
                                new Shop(item.name, item.imgSrc, item.id)
                            )
                        );
                        return this.shops;
                    })
            );
        return this.shops;
    }

    public emitShopSubject() {
        this.shopSubject.next(this.shops.slice());
    }

    private getFullUrl(myLocation) {
        // The url of the Here API where I get the list of nearby shops
        const getPlacesUrl =
            "https://places.cit.api.here.com/places/v1/discover/search";
        const getPlacesParams = {
            app_id: "yds9f87YebEn01bFvkXV",
            app_code: "sQjYU1kjM-Ur3zAKG-_-eg",
            at: myLocation,
            q: "restaurant",
            size: 8
        };

        const paramsString = Object.keys(getPlacesParams)
            .map(key => key + "=" + getPlacesParams[key])
            .reduce((acc, next) => acc + "&" + next);
        // I return the full url that would get fetched using the new fetch API
        return getPlacesUrl + "?" + paramsString;
    }

    private getLocation() {
        return new Promise((resolve, reject) => {
            if (navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(resolve, reject, {});
            }
        }).then(
            (result: any) =>
                "" + result.coords.latitude + "," + result.coords.longitude
        );
    }
}
