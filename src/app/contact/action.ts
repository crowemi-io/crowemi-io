"use server";

import {EmailContent, APIHost} from "../ui/Common"

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
        source: "no-reply@crowemi.com",
        reply_to_address: ["no-reply@crowemi.com"],
        to_address: ["crowemi@hotmail.com"],
        cc_address: null,
        bcc_address: null,
        subject: "New Contact Form Submission",
        text: null,
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contact Information</title>
        </head>
        <body>
            <h1>Contact Information</h1>
            <p><strong>First Name:</strong> ${contactForm.FirstName}</p>
            <p><strong>Last Name:</strong> ${contactForm.LastName}</p>
            <p><strong>Email:</strong> ${contactForm.Email}</p>
            <p><strong>Phone:</strong> ${contactForm.PhoneNumber}</p>
            <p><strong>Message:</strong> ${contactForm.Message}</p>
        </body>
        </html>
        `
    }

    await fetch(
        APIHost + "email/", 
        {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json'}, 
            body: JSON.stringify(emailContent)
        }
    )
        .then(res => console.log(res.status))
        .then(data => console.log(data))
}