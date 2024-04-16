'use client';
import React, {useEffect} from "react";
import {GetObjectCommand, S3Client,} from "@aws-sdk/client-s3";
import {fromCognitoIdentityPool} from "@aws-sdk/credential-providers";
//import { readGeoParquet } from "@geoarrow/geoparquet-wasm";
import {tableFromIPC} from "apache-arrow";
import getDataFromS3 from "@/app/api/s3access";
import * as arrow from "apache-arrow";

export default function JSparquetWasm() {

    // useEffect(() => {
    //     async function fetchData() {
    //         const client = new S3Client({
    //             region: "us-west-2",
    //             credentials: fromCognitoIdentityPool({
    //                 clientConfig: { region: "us-west-2" },
    //                 identityPoolId: "us-west-2:04fe86b2-1978-471f-a023-04c628c82fbf",
    //             }),
    //         });
    //
    //         const command = new GetObjectCommand({
    //             Bucket: "gva-data-bucket",
    //             Key: "month-parquet/MONTH=2020-01/d4723648cfdb4e65b0537890d6e0396e-0.parquet"
    //         });
    //
    //         try {
    //             const response = await client.send(command);
    //             const table = await arrowTable(response);
    //             console.table(table);
    //         } catch (error) {
    //             console.error("Error fetching or processing data:", error);
    //         }
    //     }
    //
    //     fetchData()
    // }, []);
    //
    //
    // async function arrowTable(parquetFile) {
    //     async function readParquet() {
    //         const parquetModule = await import(
    //             "@/app/wasm_libraries/arrow2.js"
    //             );
    //         // Need to await the default export first to initialize the WebAssembly code
    //         await parquetModule.default();
    //         return parquetModule.readParquet;
    //     }
    //     const parquetBytes = new Uint8Array(await parquetFile.arrayBuffer());
    //     const decodedArrowBytes = readParquet(parquetBytes);
    //     return arrow.tableFromIPC(decodedArrowBytes);
    //}

    return (
        <main>
            <div>
                Hello World
            </div>
        </main>);
}