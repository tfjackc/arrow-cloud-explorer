import {Card, CardBody, CardFooter, CardHeader, Divider, Image} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import React from "react";


export default function SignIn() {
    return (
        <main>
            <div className="flex flex-col items-center justify-center h-screen px-4 m-2">
                <Card className="w-full max-w-md">
                    <CardHeader className="flex gap-3">
                        <Image
                            alt="nextui logo"
                            height={40}
                            radius="sm"
                            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                            width={40}
                        />
                        <div className="flex flex-col">
                            <p className="text-md">Arrow Cloud Explorer</p>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody className="overflow-y-clip">
                        <p>Login</p>
                        <Input className="m-2 p-2" type="email" label="Email" />
                        <Input className="m-2 p-2" type="password" label="Password" />
                    </CardBody>
                    <Divider/>
                    <CardFooter>
                    </CardFooter>
                </Card>
            </div>
        </main>
    );
}
