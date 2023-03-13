import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTable, useGlobalFilter } from 'react-table';
import { ThLink } from './index.style';
import Table from './table';

function EpisodesTable({ podcasts }) {
  
  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      {
        id: 'Title',
        Header: 'Title',
        Cell: ({ row }) => (
          <ThLink>
            <Link to={`/podcast/${row?.original?.collectionId}/episode/${row?.original?.trackId}`} className="link">
              {row.original.title}
            </Link>
          </ThLink>
        ),
      },
      ...columns,
    ]);
  };
  const podcastsData = useMemo(() => [...podcasts], [podcasts]);

  const podcastsColumns = useMemo(
    () =>
      podcasts[0]
        ? Object.keys(podcasts[0])
          .filter((key) => key === "date" || key === "duration")
          .map((key) => {
            return { Header: key, accessor: key };
          })
        : [],

    [podcasts]
  );

  const tableInstance = useTable(
    { columns: podcastsColumns, data: podcastsData },
    tableHooks,
    useGlobalFilter
  )
  return <Table props={tableInstance} />

}

export default EpisodesTable;
