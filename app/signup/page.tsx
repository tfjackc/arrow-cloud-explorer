import {Card, CardBody, CardFooter, CardHeader, Divider, Image} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import React from "react";
import UserInformation from "@/app/ui/sigin_login";


export default function SignIn() {
    return (
        <main>
            <div className="flex flex-col items-center justify-center h-screen px-4 m-2">
               <UserInformation />
            </div>
        </main>
    );
}
