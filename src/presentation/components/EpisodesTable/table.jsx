import { Table, TableHead, Th, Tr, Td } from "./index.style";


function EpisodesTable({ props }) {

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = props

  return (
    <>
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup ) => (
            <tr key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th key={column} {...column.getHeaderProps()}>
                  {column.render('Header')}
                </Th>
              ))}
            </tr>
          ))}

        </TableHead>
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
      </Table>
    </>
  )
}

export default EpisodesTable