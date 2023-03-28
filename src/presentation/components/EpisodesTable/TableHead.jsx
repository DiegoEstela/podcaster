import { TableHead, Th } from "./index.style";

function TableHeader({headerGroups}) {
  return (
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
  )
}

export default TableHeader