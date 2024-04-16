import {Card, CardBody, CardFooter, CardHeader, Divider} from "@nextui-org/react";
export default function DataOptions({columnNames}: {columnNames: string[]}) {
    return (
        <main>
            <div className="overflow-y-clip my-5">
                {columnNames.join(", ")}
            </div>
        </main>
    );
}