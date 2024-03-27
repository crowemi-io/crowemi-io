"use server";

import {EmailContent, APIHost, PayLoad} from "../ui/Common"
import {bool} from "prop-types";

type form = {
    FirstName: string,
    LastName: string,
    Email: string,
    PhoneNumber: string,
    Message: string
}

function validateForm(contactForm: form): boolean {
    return true;
}

export async function PostContactForm(formData: FormData): Promise<boolean> {
    let payload: PayLoad<EmailContent> = {
        Mock: true,
        Object: {
            FromAddress: "no-reply@crowemi.com",
            ReplayToAddress: "no-reply@crowemi.com",
            ToAddresses: ["crowemi@hotmail.com"],
            CcAddresses: [],
            BccAddresses: [],
            Subject: "Test Message from NextJS",
            HtmlBody: "<h1>Hello World! From NextJS</h1>"
        }
    }
    
    let ret: boolean = await fetch(APIHost + "v1/email/", {method: 'POST', body: JSON.stringify(payload)})
        .then((resp) => {
            if (!resp.ok) {
                console.error("")
                return false;
            }
            return resp.json();
        }).then((data) => {
            console.log(data)
            return true;
        })
    return ret;
}