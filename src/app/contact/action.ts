"use server";

import {APIHost, EmailContent} from "../ui/common";

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

export async function PostContactForm(formData: FormData){
    let contactForm = {
        FirstName: formData.get("first-name"),
        LastName: formData.get("last-name"),
        Email: formData.get("email"),
        PhoneNumber: formData.get("phone-number"),
        Message: formData.get("message")
    }
    
    let emailContent: EmailContent = {
        FromAddress: "no-reply@crowemi.com",
        ReplayToAddress: "no-reply@crowemi.com",
        ToAddresses: ["crowemi@hotmail.com"],
        CcAddresses: [],
        BccAddresses: [],
        Subject: "Test Message from NextJS",
        HtmlBody: "<h1>Hello World! From NextJS</h1>"
    }
    
    const resp = await fetch(APIHost + "v1/email/", {method: 'POST', body: JSON.stringify(emailContent)})
    const data = await resp.json()
    return { status: 200, message: data}
}