'use client';
import {Button, Card, CardBody, CardFooter, CardHeader, Divider, Image, Input} from "@nextui-org/react";
export default function Uploadfile() {

    async function create(formData: FormData) {
        console.log("getting file")
        const file = formData.get('upload_file') as File;
        console.log(file)
    }

    async function getData() {
        try {
            const res = await fetch('https://wy7txjytya2yvpgwamo33f7usi0sstki.lambda-url.us-west-2.on.aws/', {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
             }
            });
            if (!res.ok) {
                // This will activate the closest `error.js` Error Boundary
                throw new Error('Failed to fetch data')
            }
            const data = await res.json();
            console.log(data);

            } catch (error) {
                console.error(error);
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
                        <form action={create}>
                            <p className="mb-6">
                                <input type="file"
                                       name='upload_file'
                                       required
                                />
                            </p>
                            <Button color="primary" type="submit">Submit</Button>
                        </form>
                        <Button className="w-1/3 mt-5 text-amber-50" color="success" type="submit" onClick={getData}>GetData</Button>
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
