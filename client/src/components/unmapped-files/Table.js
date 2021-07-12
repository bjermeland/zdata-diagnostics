import { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import Spinner from '../ui/Spinner'

const customStyles = {
  rows: {
    style: {
      minHeight: '75px',
    },
  },
  headCells: {
    style: {
      fontSize: '15px',
    },
  },
}

const conditionalRowStyles = [
  {
    when: (row) => row.isZDataCustomer,
    style: {
      //   backgroundColor: '#eee',
    },
  },
]

const Table = ({ columns, data, onRowClicked, displayZDataCustomersFilter }) => {
  const [filteredData, setFilteredData] = useState(data)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterZDataCustomers, setFilterZDataCustomers] = useState(false)

  const [tableLoading, setTableLoading] = useState(false)
  const [disableRefreshButton, setDisableRefreshButton] = useState(false)

  useEffect(() => {
    setFilteredData(
      data.filter((item) => {
        return Object.keys(item)
          .filter((k) => k !== 'id')
          .some((k) => item[k].toString().toLowerCase().includes(searchQuery.toLowerCase()))
      })
    )
  }, [searchQuery, setSearchQuery, data])

  useEffect(() => {
    if (filterZDataCustomers) {
      setFilteredData(data.filter((item) => item.isZDataCustomer))
    } else {
      setFilteredData(data)
    }
  }, [filterZDataCustomers, setFilterZDataCustomers, data])

  const handleRefresh = () => {
    setDisableRefreshButton(true)
    setTableLoading(true)

    //* temporary
    setInterval(() => {
      setTableLoading(false)
      setDisableRefreshButton(false)
    }, 2000)
  }

  return (
    <DataTable
      columns={columns}
      data={filteredData}
      customStyles={customStyles}
      selectableRows
      selectableRowsComponent={Checkbox}
      conditionalRowStyles={conditionalRowStyles}
      progressPending={tableLoading}
      progressComponent={<Spinner />}
      onRowClicked={(row) => onRowClicked(row)}
      highlightOnHover
      pointerOnHover
      pagination
      noHeader
      subHeader
      subHeaderAlign="left"
      subHeaderComponent={
        <SubHeader
          displayZDataCustomersFilter={displayZDataCustomersFilter}
          setSearchQuery={setSearchQuery}
          setFilterZDataCustomers={setFilterZDataCustomers}
          handleRefresh={handleRefresh}
          disableRefreshButton={disableRefreshButton}
        />
      }
    />
  )
}

const SubHeader = ({
  displayZDataCustomersFilter,
  setSearchQuery,
  setFilterZDataCustomers,
  handleRefresh,
  disableRefreshButton,
}) => {
  return (
    <div className="row w-100" id="table-subheader">
      <div className="col-lg-9">
        <div className="input-group mb-3">
          <span className="input-group-text" id="search-icon">
            <i className="ai-search fs-4"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Type here to search.."
            aria-label="Search"
            aria-describedby="search-icon"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="col-lg-3">
        {displayZDataCustomersFilter && (
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="zdata-customers"
              onClick={(e) => setFilterZDataCustomers(e.target.checked)}
              role="button"
            />
            <label className="form-check-label" htmlFor="zdata-customers" role="button">
              Kun ZData Kunder
            </label>
          </div>
        )}
        <div className="btn-toolbar" role="toolbar" aria-label="Settings toolbar">
          <div className="btn-group me-2 mb-2" role="group" aria-label="Settings group">
            <button type="button" className="btn btn-translucent-info btn-icon" title="Refresh">
              <i className="ai-refresh-cw"></i>
            </button>
            <button type="button" className="btn btn-translucent-primary btn-icon" title="Retry selected">
              <i className="ai-download"></i>
            </button>
            <button type="button" className="btn btn-translucent-danger btn-icon" title="Delete selected">
              <i className="ai-trash-2"></i>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="col-lg-3">
        <button type="button" className="btn btn-link" onClick={() => handleRefresh()} disabled={disableRefreshButton}>
          <i className="ai-refresh-cw me-2"></i>
          Refresh
        </button>
      </div> */}
    </div>
  )
}

const Checkbox = () => {
  return <input className="form-check-input" type="checkbox" />
}

export default Table
