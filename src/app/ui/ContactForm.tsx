"use client"

import { PostContactForm } from "../contact/action";
import { useFormState } from "react-dom";

export default function ContactForm() {
    let [state, formAction] = useFormState(PostContactForm, null)

    return (
        <>
        <form action={formAction} className="px-6 pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                        <div className="mt-2.5">
                            <input type="text" name="first-name" id="first-name" defaultValue={""} autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                        <div className="mt-2.5">
                            <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                        <div className="mt-2.5">
                            <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
                        <div className="mt-2.5">
                            <input type="tel" name="phone-number" id="phone-number" autoComplete="tel" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                        <div className="mt-2.5">
                            <textarea name="message" id="message" rows={4} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"></textarea>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-end">
                        <button type="submit" className="rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">Send message</button>
                    </div>
                </div>
            </div>
        </form>
        <div>
            {JSON.stringify(state, null, 2)}
        </div>
        </>
    )

}
