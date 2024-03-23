"use client";
import {Card, CardBody, CardFooter, CardHeader, Divider, Image} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {useEffect, useState} from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function UserInformation() {

    const pathname = usePathname()
    const searchParams = useSearchParams()

    const [cardTitle, setCardTitle] = useState<string | null>(null);

    useEffect(() => {
        const url = `${pathname}?${searchParams}`
        console.log(url)

        if (pathname === "/login") {
            setCardTitle("Login")
        } else if (pathname === "/signup") {
            setCardTitle("Sign Up")
        }
    }, [pathname, searchParams])

    return (
        <main>
            <div className="flex flex-col items-center justify-center h-screen px-4 m-2">
                <Card className="w-full max-w-md">
                    <CardHeader className="flex gap-3 my-2">
                        <Image
                            height={40}
                            radius="sm"
                            src="./explorer.webp"
                            width={40}
                        />
                        <div className="flex flex-col">
                            <p className="text-md">Arrow Cloud Explorer</p>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody className="overflow-y-clip">
                        <p>{cardTitle}</p>
                        <Input className="m-2 p-2" type="email" label="Email" />
                        <Input className="m-2 p-2" type="password" label="Password" />
                    </CardBody>
                    <Divider/>
                    <CardFooter>
                        <br />
                    </CardFooter>
                </Card>
            </div>
        </main>
    );
}
