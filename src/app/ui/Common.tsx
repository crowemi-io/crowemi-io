// application constants
export const Email = "hello@crowemi.com";
export const Phone = { display: "541-704-7844", href: "tel:+15417047844"};
export const APIHost = process.env.CROWEMI_API_HOST;

// TODO: ts-utils
export type EmailContent = {
    FromAddress: string
    ReplayToAddress: string
    ToAddresses: string[] | null
    CcAddresses: string[]
    BccAddresses: string[]
    Subject: string
    HtmlBody: string
}
export type PayLoad<T> = {
    Mock: boolean
    Object: T
}