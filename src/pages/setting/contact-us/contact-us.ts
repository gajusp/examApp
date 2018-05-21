import { Component } from "@angular/core";
import { IContactUs } from "../../../app/models/models";

@Component({
    selector: 'contact-us',
    templateUrl: 'contact-us.html'
})

export class ContactUs {

    contactUs: IContactUs;

    constructor() {
        this.onResetData();
    }

    onSendData() {
        console.log('API call to send data' , this.contactUs);
    }

    onResetData() {
        this.contactUs = {
            name: '',
            email: '',
            phoneNumber: undefined,
            city: '',
            message: ''
        }
    }
}