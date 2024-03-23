import {Button, Card, CardBody, CardFooter, CardHeader, Divider, Image, Input} from "@nextui-org/react";
export default function Uploadfile() {

    async function create(formData: FormData) {
        'use server';
        const file = formData.get('upload_file') as File;
        console.log('file', file);
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
