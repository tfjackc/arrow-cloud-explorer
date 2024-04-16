'use client';
import React, { useEffect } from "react";
import {
    GetObjectCommand,
    S3Client,
} from "@aws-sdk/client-s3";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
import * as arrow from "apache-arrow";
import * as parquet from "parquet-wasm";

export default function GeoArrowJS() {

    useEffect(() => {
        async function fetchData() {
            const client = new S3Client({
                region: "us-west-2",
                credentials: fromCognitoIdentityPool({
                    clientConfig: { region: "us-west-2" },
                    identityPoolId: "us-west-2:04fe86b2-1978-471f-a023-04c628c82fbf",
                }),
            });

            const command = new GetObjectCommand({
                Bucket: "gva-data-bucket",
                Key: "month-parquet/MONTH=2020-01/d4723648cfdb4e65b0537890d6e0396e-0.parquet"
            });

            try {
                const { Body } = await client.send(command);
                const arrayBuffer = await readStream(Body);
                const arrowTable = await convertToArrowTable(arrayBuffer);
                console.log(arrowTable); // or handle the table as needed
            } catch (error) {
                console.error("Error fetching or processing data:", error);
            }
        }

        fetchData();
    }, []);

    async function readStream(stream) {
        const reader = stream.getReader();
        const chunks = [];
        let done, value;
        while (!done) {
            ({ done, value } = await reader.read());
            if (value) {
                chunks.push(value);
            }
        }
        return new Uint8Array(chunks.flat()).buffer;
    }

    // async function readParquet() {
    //             const parquetModule = await import(
    //                 "@/app/wasm_libraries/arrow2.js"
    //                 );
    //             // Need to await the default export first to initialize the WebAssembly code
    //             await parquetModule.default();
    //             return parquetModule.readParquet;
    // }

    async function convertToArrowTable(arrayBuffer) {
        const parquetBytes = new Uint8Array(arrayBuffer);
        const arrowWasmTable = parquet.readParquet(parquetBytes);
        console.table(arrowWasmTable);

        // const decodedArrowBytes = readParquet(parquetBytes); // Ensure this function is correctly implemented to return Arrow format
        // return tableFromIPC(decodedArrowBytes);
    }

    return (
        <main>
            <div>Hello World</div>
        </main>
    );
}
