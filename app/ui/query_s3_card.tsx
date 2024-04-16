'use client';
import {Button, Card, CardBody, CardFooter, CardHeader, Divider} from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import {tableFromIPC} from "apache-arrow";

export default function QueryS3Card() {

    const [bucket, setBucket] = useState("gva-data-bucket");
    const [folder, setFolder] = useState("month-parquet/MONTH=2020-01/");
    const [item_name, setItem_name] = useState("d4723648cfdb4e65b0537890d6e0396e-0.parquet");
    const [s3url, setS3url] = useState(`http://127.0.0.1:8000/s3_item?bucket=${bucket}&folder=${folder}&name=${item_name}`);
    const [fetchTable, setFetchTable] = useState<any[]>([]);
    const [columnNames, setColumnNames] = useState<string[]>([]); // Adjusted line

    useEffect(() => {
        setS3url(`http://127.0.0.1:8000/in_memory_return?bucket=${bucket}&folder=${folder}&name=${item_name}`);
    }, [bucket, folder, item_name]); // Dependencies

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
                console.log("HTTP error!");
            }
            console.log(res)
            const arrayBuffer = await res.arrayBuffer();
            const response_table = tableFromIPC(arrayBuffer); // Assumes tableFromIPC can handle ArrayBuffer directly
            //console.table(response_table.schema.fields);
            const columns = response_table.schema.fields.map((field) => field.name);
            setColumnNames(columns);
            // const arrayTable = response_table.toArray();
            // console.table(arrayTable);
            // const columns = response_table.schema.fields.map((field) => field.name);
            // console.log(columns);

           // setFetchTable(arrayTable);
            //await getTableData(arrayTable);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <main>
            <Card className="sm:w-[800px] w-full">
                <CardHeader className="flex gap-3 my-2">
                    <div className="flex flex-col">
                        {/*<p className="text-md">S3 Object Access</p>*/}
                    </div>
                </CardHeader>
                <Divider/>
                <CardBody className="overflow-y-clip my-5">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6 flex flex-row">
                            <label className="text-md pr-2">S3 Bucket:</label>
                            <input type="input"
                                   name="bucket"
                                   value={bucket}
                                   onChange={e => setBucket(e.target.value)}
                                   className="w-5/6 p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-6 flex flex-row">
                            <label className="text-md pr-2">Folder Path:</label>
                            <input type="input"
                                   name="folder"
                                   value={folder}
                                   onChange={e => setFolder(e.target.value)}
                                   className="w-5/6 p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-6 flex flex-row">
                            <label className="text-md pr-2">Object:</label>
                            <input type="input"
                                   name="item_name"
                                   value={item_name}
                                   onChange={e => setItem_name(e.target.value)}
                                   className="w-5/6 p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-6 flex flex-row">
                            <label className="text-md pr-2">API Query:</label>
                            <input type="input"
                                   name="s3url"
                                   value={s3url}
                                   onChange={e => setS3url(e.target.value)}
                                   className="w-5/6 p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <Button className="w-1/3 mt-5 text-amber-50 hover:bg-sky-600" color="success"
                                type="submit">GetData</Button>
                    </form>
                </CardBody>
                <Divider/>
                <CardFooter>
                    <br/>
                </CardFooter>
            </Card>
        </main>
    )
}