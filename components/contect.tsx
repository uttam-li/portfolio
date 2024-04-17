'use client'

import * as React from "react"
import { Minus, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { sendEmail } from "@/lib/sendEmail";
import { FaPaperPlane } from "react-icons/fa6"
import { useFormStatus } from "react-dom";
import { toast } from "./ui/use-toast"

export function DrawerDemo() {
    const { pending } = useFormStatus();

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline">Get in touch</Button>
            </DrawerTrigger>
            <DrawerContent className="flex items-center justify-center">
                <div className="mt-10 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center ">
                    <DrawerHeader>
                        <p className="text-gray-700 -mt-6 text-white/80">
                            Please contact me directly at{" "}
                            <a className="underline" href="mailto:supercelluttam@gmail.com">
                                supercelluttam@gmail.com
                            </a>{" "}
                            {/* or through this form. */}
                        </p>
                    </DrawerHeader>
                    {/* <form
                        className="mt-10 w-full flex flex-col text-black items-center px-4"
                        action={async (formData) => {
                            const { data, error } = await sendEmail(formData);
                            console.log(data, error)
                            if (error) {
                                toast({
                                    title: "Email failed to send",
                                });
                                return;
                            }
                        }}
                    >
                        <input
                            className="h-14 px-4 w-full rounded-lg borderBlack bg-secondary text-white bg-opacity-80 focus:bg-opacity-100 transition-all outline-none"
                            name="senderEmail"
                            type="email"
                            required
                            maxLength={500}
                            placeholder="Your email"
                        />
                        <textarea
                            className="h-52 my-3 w-full rounded-lg borderBlack p-4 bg-secondary text-white dar bg-opacity-80 focus:bg-opacity-100 transition-all outline-none"
                            name="message"
                            placeholder="Your message"
                            required
                            maxLength={5000}
                        />

                        <DrawerFooter>
                            <Button>Submit</Button>
                            <DrawerClose asChild>
                                <Button
                                    type="submit"
                                    className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
                                    disabled={pending}
                                >
                                    {pending ? (
                                        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                                    ) : (
                                        <>
                                            Submit{" "}
                                            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
                                        </>
                                    )}
                                </Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </form> */}
                </div>
            </DrawerContent>
        </Drawer >
    )
}
