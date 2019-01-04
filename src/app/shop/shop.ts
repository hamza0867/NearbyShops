export class Shop {
    public name: string;
    public imgSrc: string;
    public id: string;
    public liked: boolean;
    public disliked: boolean;

    constructor(name: string, imgSrc: string, id: string) {
        this.name = name;
        this.imgSrc = imgSrc;
        this.id = id;
        this.liked = false;
        this.disliked = false;
    }

    public like() {
        if (!this.liked) {
            this.liked = true;
            this.disliked = false;
        } else {
            this.liked = false;
        }
    }

    public dislike() {
        if (!this.disliked) {
            this.disliked = true;
            this.liked = false;
        } else {
            this.disliked = false;
        }
    }
}
