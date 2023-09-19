export default class loginPage {
    readonly userName: string;
    readonly password: string;
    readonly loginBtn: string;
    readonly errorMessage: string;

    constructor() {
        this.userName = "//*[@id='user-name']";
        this.password = "//*[@id='password']"
        this.loginBtn = "//*[@id='login-button']";
        this.errorMessage = "//*[@class='error-message-container error']";
    }
}