"use server";

import * as fs from "fs";

export async function PostContactForm(formData: FormData){
    var contactForm = {
        "FirstName": formData.get("first-name"),
        "LastName": formData.get("last-name"),
        "Email": formData.get("email"),
        "PhoneNumber": formData.get("phone-number"),
        "Message": formData.get("message")
    }
    fs.writeFileSync(".secret/contact-form.json", JSON.stringify(contactForm), { flag: "a"});
    return { status: 200, message: "success"}
    // validate form data
    // send email
}