import { Metadata } from "next";
export const metadata = {
  title: "Secure Communication Platform | Zoiko Sema",
  description:
    "Zoiko Sema delivers secure communication with encrypted messaging, voice and video calls, secure file sharing, and seamless collaboration for businesses.",
}

import { SecureCommunicationPage } from "@/components/secure-communication";

export default function(){
    return(
        <main>
            <SecureCommunicationPage/>
        </main>
    )
}