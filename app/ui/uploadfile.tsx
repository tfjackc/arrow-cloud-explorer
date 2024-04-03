import { Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import QueryS3Card from "@/app/ui/query_s3_card";
import DataOptions from "@/app/ui/data_options";
export default function Uploadfile() {
    return (
        <main>
            <div className="flex flex-col items-center justify-center px-4 m-2">
               <QueryS3Card />
            </div>
            <div className="flex flex-col items-center px-4 m-2 mt-5">
               <DataOptions />
            </div>
        </main>
    );
}
