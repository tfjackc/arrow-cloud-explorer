'use client';
import React, { useEffect } from "react";
import {
    GetObjectCommand,
    S3Client,
} from "@aws-sdk/client-s3";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
import { readGeoParquet } from "@geoarrow/geoparquet-wasm";
import { tableFromIPC } from "apache-arrow";

export default function Wasm() {

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
                const response = await client.send(command);
                await convertParquet(response);
            } catch (error) {
                console.error("Error fetching or processing data:", error);
            }
        }

        fetchData();
    }, []);

    async function convertParquet(response: any) {
        const arrayBuffer = await response.Body.arrayBuffer();
        const wasmTable = readGeoParquet(new Uint8Array(arrayBuffer));
        const jsTable = tableFromIPC(wasmTable.intoTable().intoIPCStream());
        console.table(jsTable)
        // Do something with jsTable if needed
    }

    return <div></div>;
}
