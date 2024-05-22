// application constants
export const Email = "hello@crowemi.com";
export const Phone = { display: "541-704-7844", href: "tel:+15417047844"};
export const APIHost = process.env.CROWEMI_API_HOST;

// TODO: ts-utils
export type EmailContent = {
    source: string,
    reply_to_address: string[]
    to_address: string[]
    cc_address: string[] | null
    bcc_address: string[] | null
    subject: string
    text: string | null
    html: string | null
}