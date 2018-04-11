export class LoginModel {
    Email: string;
    Password: string;

constructor(email: string, password: string) {
    this.Email = email;
    this.Password = password;
}

}

export class RegisterModel {
    Email: string;
    Password: string;
    ConfirmPassword: string;
    FullName: string;
    MobileNumber: string;

    constructor(email: string, password: string, confirmPassword: string, fullName: string, mobileNUmber: string) {
        this.Email = email;
        this.Password = password;
        this.ConfirmPassword = confirmPassword;
        this.FullName = fullName;
        this.MobileNumber = mobileNUmber;
    }

}
