export class AuthService {
    public isAuth = false;

    constructor() {}

    public signIn() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.isAuth = true;
                resolve(true);
            }, 2000);
        });
    }

    public signOut() {
        this.isAuth = false;
    }
}
