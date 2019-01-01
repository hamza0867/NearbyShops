export class AuthService {
    public isAuth = false;
    public userId;

    constructor() {}

    public signIn(userName, pass) {
        if (userName === "hamza" && pass === "hamza") {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    this.isAuth = true;
                    resolve(true);
                }, 2000);
            });
        }
    }

    public signOut() {
        this.isAuth = false;
    }
}
