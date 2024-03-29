"use server";

import {EmailContent, PayLoad, SendEmail} from "../ui/Common"
import {revalidatePath} from "next/cache";
import {z} from "zod";

const form = z.object({
    FirstName: z.string().min(1, "First Name is required."),
    LastName: z.string().min(1, "Last Name is required."),
    Email: z.string().min(1).email("Email is required."),
    PhoneNumber: z.string(),
    Message: z.string().min(1, "Message is required.")
})

export async function PostContactForm(state: any, formData: FormData) {
    const formSchema = form.safeParse(
        {
            FirstName: formData.get("first-name"),
            LastName: formData.get("last-name"),
            Email: formData.get("email"),
            PhoneNumber: formData.get("phone-number"),
            Message: formData.get("message")
        }
    );

    if ( formSchema.success) {

        let payload: PayLoad<EmailContent> = {
            Mock: true,
            Object: {
                FromAddress: "no-reply@crowemi.com",
                ReplayToAddress: "no-reply@crowemi.com",
                ToAddresses: [formSchema.data.Message],
                CcAddresses: [],
                BccAddresses: [],
                Subject: `New Contact Message from ${formSchema.data.FirstName} ${formSchema.data.LastName}`,
                HtmlBody: `<p>${formSchema.data.Message}</p>`
            }
        }
        let ret = await SendEmail(payload)
        console.log(ret)
        return { data: ret }
    }
    if (formSchema.error) {
        // TODO: handle errors
        return { data: formSchema.error.format() }
    }



}