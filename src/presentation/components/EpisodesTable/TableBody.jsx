import {Tr, Td } from "./index.style";

function TableBody({getTableBodyProps,rows, prepareRow}) {
  return (
    <tbody {...getTableBodyProps()}>
    {rows.map((row, key) => {
      prepareRow(row);
      return (
        <Tr key={key} {...row.getRowProps()}>
          {row.cells.map((cell, key) => {
            return (
              <Td key={key} {...cell.getCellProps()}>
                {cell.render('Cell')}
              </Td>
            );
          })}
        </Tr>
      );
    })}
  </tbody>
  )
}

export default TableBody