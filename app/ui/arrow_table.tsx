// import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
//
// export default function ArrowTable({table}) {
//     return (
//         <Table>
//             <TableHeader>
//                 {table.schema.fields.map((field, index) => (
//                     <TableColumn key={index}>{field.name}</TableColumn>
//                 ))}
//             </TableHeader>
//             <TableBody>
//                 {table.chunks.map((chunk, index) => (
//                     <TableRow key={index}>
//                         {table.schema.fields.map((field, index) => (
//                             <TableCell key={index}>{getKeyValue(chunk, field.name)}</TableCell>
//                         ))}
//                     </TableRow>
//                 ))}
//             </TableBody>
//         </Table>
//     );
// }
