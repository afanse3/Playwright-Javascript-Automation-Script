export class RegistrationPage {
    constructor(page){
        this.page = page;

        //Registration page
        this.phoneInput = "#mobilePhone";
        this.emailInput = "#email";
        this.firstNameInput = "#firstName";
        this.lastNameInput = "#lastName";
        this.daftarButton = 'button[data-button-name="register-new"]';

        // OTP page
        this.otpHeader = page.getByText("Verifikasi No. Handphone", { exact: true });
    }

    async open() {
        await this.page.goto("https://www.cermati.com/app/gabung");
    }

    async fillForm() {
        await this.page.fill(this.phoneInput, "081187345312");
        await this.page.fill(this.emailInput, "arftest@gmail.com");
        await this.page.fill(this.firstNameInput, "John");
        await this.page.fill(this.lastNameInput, "Doe");   
    }

    async clickDaftar(){
        await this.page.click(this.daftarButton);
    }

    async verifyOtpHeader() {
        await this.otpHeader.waitFor({ state: "visible", timeout: 10000})
    }
}