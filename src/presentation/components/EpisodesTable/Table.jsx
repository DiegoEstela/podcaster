import { TableContainer} from "./index.style";
import TableBody from "./TableBody";
import TableHeader from "./TableHead";


function EpisodesTable({ props }) {

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = props

  return (
    <>
      <TableContainer {...getTableProps()}>
        <TableHeader headerGroups={headerGroups}/>
        <TableBody getTableBodyProps={getTableBodyProps} rows={rows} prepareRow={prepareRow}/>
      </TableContainer>
    </>
  )
}

export default EpisodesTable