// application constants
export const Email = "hello@crowemi.com";
export const Phone = { display: "541-704-7844", href: "tel:+15417047844"};
export const APIHost = process.env.CROWEMI_API_HOST;

// TODO: migrate to ts-utils
export type EmailContent = {
    FromAddress: string
    ReplayToAddress: string
    ToAddresses: string[] | null
    CcAddresses: string[]
    BccAddresses: string[]
    Subject: string
    HtmlBody: string
}
export type SMSContent = {}
export type PayLoad<T> = {
    Mock: boolean
    Object: T
}

export async function SendEmail(payload: PayLoad<EmailContent>) {
    await fetch(APIHost + "v1/email/", {method: 'POST', body: JSON.stringify(payload)})
        .then((resp) => {
            return resp.json();
        }).then((data) => {
            console.debug("data: " + data)
            return data;
        })
}
export function SendSMS(payload: PayLoad<SMSContent>) {}