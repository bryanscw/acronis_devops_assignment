import React from "react";

export default function Table({columns, data, propertyAsKey}) {

    return (
        <table>
            <thead>
            <tr>{columns.map(col => <th key={`header-${col.header}`}>{col.header}</th>)}</tr>
            </thead>
            <tbody>
            {data.map(item =>
                <tr key={`${item[propertyAsKey]}-row`}>
                    {columns.map(col => <td key={`${item[propertyAsKey]}-${col.accessor}`}>{item[col.accessor]}</td>)}
                </tr>)}
            </tbody>
        </table>);
}