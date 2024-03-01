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
import SubmitBtn from "./submit-button"
import { useToast } from "@/components/ui/use-toast"
import { sendEmail } from "@/lib/sendEmail";


export function DrawerDemo() {
    const { toast } = useToast();

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="secondary">Get in touch</Button>
            </DrawerTrigger>
            <DrawerContent className="flex items-center justify-center">
                <div className="mt-10 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center ">
                    <DrawerHeader>
                        <p className="text-gray-700 -mt-6 text-white/80">
                            Please contact me directly at{" "}
                            <a className="underline" href="mailto:example@gmail.com">
                                example@gmail.com
                            </a>{" "}
                            or through this form.
                        </p>
                    </DrawerHeader>
                    <form
                        className="mt-10 w-full flex flex-col text-black items-center"
                        action={async (formData) => {
                            const { data, error } = await sendEmail(formData);

                            if (error) {
                                toast({
                                    title: "Email failed to send",
                                });
                                return;
                            }
                        }}
                    >
                        <input
                            className="h-14 px-4 w-96 md:w-full rounded-lg borderBlack bg-secondary text-white bg-opacity-80 focus:bg-opacity-100 transition-all outline-none"
                            name="senderEmail"
                            type="email"
                            required
                            maxLength={500}
                            placeholder="Your email"
                        />
                        <textarea
                            className="h-52 my-3 w-96 md:w-full rounded-lg borderBlack p-4 bg-secondary text-white dar bg-opacity-80 focus:bg-opacity-100 transition-all outline-none"
                            name="message"
                            placeholder="Your message"
                            required
                            maxLength={5000}
                        />
                    </form>
                    <DrawerFooter>
                        {/* <Button>Submit</Button> */}
                        <DrawerClose asChild>
                            <SubmitBtn />
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer >
    )
}
