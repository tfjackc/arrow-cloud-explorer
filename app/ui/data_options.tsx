'use client';
import React from 'react';

type DataOptionsProps = {
    columnNames: string[];
    rowCount: number;
};

const DataOptions: React.FC<DataOptionsProps> = ({ columnNames, rowCount }) => {
    return (
        <div>
            <h1>Arrow Table Returned</h1>
            <p>Column Names: {columnNames.join(", ")}</p>
            <p>Number of rows: {rowCount}</p>
        </div>
    );
};

export default DataOptions;