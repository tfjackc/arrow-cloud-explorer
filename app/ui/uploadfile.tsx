'use client';
import {Button, Card, CardBody, CardFooter, CardHeader, Divider, Image, Input} from "@nextui-org/react";
import React, { useState } from "react";
import { tableFromIPC } from 'apache-arrow';
export default function Uploadfile() {

    const [s3url, setS3url] = useState("http://127.0.0.1:8000/s3_item");


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (s3url) {
            console.log("calling getData")
            await getData(s3url);
        }
    }

    async function getData(s3url: string) {
        try {
            console.log("Fetching data");
            const res = await fetch(s3url);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const arrayBuffer = await res.arrayBuffer();
            const table = tableFromIPC(arrayBuffer); // Assumes tableFromIPC can handle ArrayBuffer directly
            console.table([...table]);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <main>
            <div className="flex flex-col items-center justify-center h-screen px-4 m-2">
                <Card className="sm:w-[800px] w-full">
                    <CardHeader className="flex gap-3 my-2">
                        <div className="flex flex-col">
                            <p className="text-md">Upload Data</p>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody className="overflow-y-clip my-5">
                        <form onSubmit={handleSubmit}>
                            <p className="mb-6">
                                <input type="input"
                                       name="s3url"
                                       value={s3url}
                                       onChange={e => setS3url(e.target.value)}
                                />
                            </p>
                            <Button className="w-1/3 mt-5 text-amber-50 hover:bg-sky-600" color="success" type="submit">GetData</Button>
                        </form>

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
