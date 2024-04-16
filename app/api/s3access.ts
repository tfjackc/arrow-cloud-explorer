'use server';
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { tableFromIPC } from 'apache-arrow';
import { Readable } from 'stream';
import {readGeoParquet} from "@geoarrow/geoparquet-wasm";



async function streamToBuffer(readableStream: Readable): Promise<Buffer> {
    const chunks: Buffer[] = [];
    for await (const chunk of readableStream) {
        chunks.push(chunk as Buffer);
    }
    return Buffer.concat(chunks);
}

export default async function getDataFromS3() {

    const s3Client = new S3Client({ region: "us-west-2" });
    const command = new GetObjectCommand({
        Bucket: "gva-data-bucket",
        Key: "month-parquet/MONTH=2020-01/d4723648cfdb4e65b0537890d6e0396e-0.parquet"
    });

    const response = await s3Client.send(command);

    // Check if response.Body is an instance of Readable (Node.js environment)
    if (response.Body instanceof Readable) {
        const wasmModule = require('@geoarrow/geoparquet-wasm');
        await wasmModule.ready;
        //console.log("are we here?")
        const buffer = await streamToBuffer(response.Body);
        const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
        console.log(arrayBuffer)

        const wasmTable = readGeoParquet(new Uint8Array(arrayBuffer));
        const jsTable = tableFromIPC(wasmTable.intoTable().intoIPCStream());
        return { success: true, data: jsTable };
        //return { success: true };
    } else {
        throw new Error("Unsupported environment for S3 body conversion.");
    }
}
