import {Card, CardBody, CardFooter, CardHeader, Divider} from "@nextui-org/react";
export default function DataOptions() {
    return (
        <main>
            <Card className="sm:w-[800px] w-full">
                <CardHeader>
                    <p className="text-md">Data Table</p>
                </CardHeader>
                <Divider/>
                <CardBody className="overflow-y-clip my-5">
                    {/*{columnNames.join(', ')}*/}
                    Data Table
                </CardBody>
                <Divider/>
                <CardFooter>
                    <br/>
                </CardFooter>
            </Card>
        </main>
    );
}