import { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import Spinner from '../ui/Spinner'
import SupportCaseModal from './SupportCaseModal'

const customStyles = {
  rows: {
    style: {
      minHeight: '61px',
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

const Table = ({
  columns,
  data,
  onRowClicked,
  displayZDataCustomersFilter,
  displayToolbar,
  displaySupportCasesToolbar,
}) => {
  const [loading, setLoading] = useState(true)
  const [filteredData, setFilteredData] = useState(data)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterZDataCustomers, setFilterZDataCustomers] = useState(false)

  const [tableLoading, setTableLoading] = useState(false)
  const [disableRefreshButton, setDisableRefreshButton] = useState(false)

  const [totalRows, setTotalRows] = useState(25)

  //* Search for all fields in data except id
  useEffect(() => {
    setFilteredData(
      data.filter((item) => {
        return Object.keys(item)
          .filter((k) => k !== 'id')
          .some((k) => item[k].toString().toLowerCase().includes(searchQuery.toLowerCase()))
      })
    )
  }, [searchQuery, setSearchQuery, data])

  //* Retrieves total rows saved in LocalStorage and checks if it is a valid number
  useEffect(() => {
    const totalRows = localStorage.getItem('total-rows')
    if (!isNaN(parseInt(totalRows))) {
      setTotalRows(parseInt(totalRows))
    }
    setLoading(false)
  }, [])

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

  const handleChangeRowsPerPage = (totalRows) => {
    localStorage.setItem('total-rows', totalRows)
  }

  return !loading ? (
    <DataTable
      theme="dark"
      columns={columns}
      data={filteredData}
      customStyles={customStyles}
      selectableRows
      conditionalRowStyles={conditionalRowStyles}
      progressPending={tableLoading}
      progressComponent={<Spinner />}
      onRowClicked={(row) => onRowClicked(row)}
      paginationPerPage={totalRows}
      paginationRowsPerPageOptions={[25, 50, 150, 300, 500]}
      onChangeRowsPerPage={(totalRows) => handleChangeRowsPerPage(totalRows)}
      highlightOnHover
      pointerOnHover
      pagination
      noHeader
      subHeader
      subHeaderAlign="left"
      subHeaderComponent={
        <SubHeader
          displayZDataCustomersFilter={displayZDataCustomersFilter}
          displayToolbar={displayToolbar}
          displaySupportCasesToolbar={displaySupportCasesToolbar}
          setSearchQuery={setSearchQuery}
          setFilterZDataCustomers={setFilterZDataCustomers}
          handleRefresh={handleRefresh}
          disableRefreshButton={disableRefreshButton}
        />
      }
    />
  ) : (
    <Spinner />
  )
}

const SubHeader = ({
  displayZDataCustomersFilter,
  displayToolbar,
  displaySupportCasesToolbar,
  setSearchQuery,
  setFilterZDataCustomers,
  handleRefresh,
  disableRefreshButton,
}) => {
  return (
    <div className="row w-100" id="table-subheader">
      <div className="col-lg-9">
        <div className="input-group bg-dark-gray-light mb-3">
          <span className="input-group-text border-0 bg-dark-gray" id="search-icon">
            <i className="ai-search fs-4"></i>
          </span>
          <input
            type="text"
            className="form-control border-0"
            placeholder="Type here to search.."
            aria-label="Search"
            aria-describedby="search-icon"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="col-lg-3">
        {displayZDataCustomersFilter && (
          <div className="btn-toolbar" role="toolbar" aria-label="Settings toolbar">
            <div className="btn-group me-2 mb-2 w-100" role="group" aria-label="Settings group">
              <button
                type="button"
                className="btn btn-info btn-icon"
                title="Refresh"
                onClick={() => handleRefresh()}
                disabled={disableRefreshButton}
              >
                <i className="ai-refresh-cw"></i>
              </button>
              <button type="button" className="btn btn-primary btn-icon" title="Retry selected">
                <i className="ai-download"></i>
              </button>
              <SupportCaseModal />
              <button type="button" className="btn btn-danger btn-icon" title="Delete selected">
                <i className="ai-trash-2"></i>
              </button>
            </div>
          </div>
        )}
        {displayToolbar && (
          <div className="btn-toolbar" role="toolbar" aria-label="Settings toolbar">
            <div className="btn-group me-2 mb-2 w-100" role="group" aria-label="Settings group">
              <button
                type="button"
                className="btn btn-info btn-icon"
                title="Refresh"
                onClick={() => handleRefresh()}
                disabled={disableRefreshButton}
              >
                <i className="ai-refresh-cw"></i>
              </button>
              <button type="button" className="btn btn-primary btn-icon" title="Retry selected">
                <i className="ai-download"></i>
              </button>
              <button type="button" className="btn btn-danger btn-icon" title="Delete selected">
                <i className="ai-trash-2"></i>
              </button>
            </div>
          </div>
        )}
        {displaySupportCasesToolbar && (
          <div className="row">
            <div className="col-lg">
              <div className="btn-toolbar" role="toolbar" aria-label="Settings toolbar">
                <div className="btn-group me-2 mb-2" role="group" aria-label="Settings group">
                  <button
                    type="button"
                    className="btn btn-info btn-icon"
                    title="Refresh"
                    onClick={() => handleRefresh()}
                    disabled={disableRefreshButton}
                  >
                    <i className="ai-refresh-cw"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="zdata-customers"
                  onClick={(e) => setFilterZDataCustomers(e.target.checked)}
                  role="button"
                />
                <label className="form-check-label" htmlFor="zdata-customers" role="button">
                  My Cases
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Table
