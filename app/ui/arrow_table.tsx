'use client';
import React from 'react';
import { Table } from "apache-arrow";

function ArrowTableToHtml({ arrowTable }: { arrowTable: Table | null }) {
    if (!arrowTable) {
        return <div>No data available.</div>;
    }

    // Extract column headers
    const columns = arrowTable.schema.fields.map(field => field.name);

    // Extract rows from the Arrow table
    const rows = [];
    for (let i = 0; i < arrowTable.numRows; i++) {
        const row = {};
        columns.forEach(column => {
            const columnData = arrowTable.getChild(column);
            if (columnData) { // Check if the columnData is not null
                //@ts-ignore
                row[column] = columnData.get(i);
            } else {
                //@ts-ignore
                row[column] = undefined; // or handle as needed, e.g., set a default value
            }
        });
        rows.push(row);
    }

    // @ts-ignore
    return (
        <div>
            <table>
                <thead>
                <tr>
                    {columns.map(column => (
                        <th key={column}>{column}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {rows.map((row, index) => (
                    <tr key={index}>
                        {columns.map(column => (
                            //@ts-ignore
                            <td key={`${index}-${column}`}>{row[column] !== undefined ? row[column] : 'N/A'}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ArrowTableToHtml;
