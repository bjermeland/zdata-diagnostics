import { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import Spinner from '../ui/Spinner'

const data = [
  {
    id: 1,
    company: 'Bedrift Alpha AS',
    orgNumber: '123123123',
    description: 'Venter på onboarding fra Uni.',
    fileTypes: 'C053, C54C',
    bic: 'SPRNO22',
    accountant: 'Borgund Regnskap AS',
    lastReceived: '22/04/2021 08:00',
    isZDataCustomer: true,
  },
  {
    id: 2,
    company: 'ZData AS',
    orgNumber: '123123123',
    description: 'Setter beskrivelse',
    fileTypes: 'C051',
    bic: 'NONO20',
    accountant: 'HK regnskap',
    lastReceived: '22/04/2021 08:00',
    isZDataCustomer: false,
  },
  {
    id: 3,
    company: 'Ny Bedrift AS',
    orgNumber: '123123123',
    description: 'Boarding',
    fileTypes: 'C053, C54C',
    bic: 'SPRNO22',
    accountant: 'Mpr gruppen',
    lastReceived: '22/04/2021 08:00',
    isZDataCustomer: false,
  },
  {
    id: 4,
    company: 'Alka AS',
    orgNumber: '123123123',
    description: 'Venter på onboarding fra Uni.',
    fileTypes: 'C053, C54C',
    bic: 'APAP50',
    accountant: 'Borgund Regnskap AS',
    lastReceived: '21/04/2021 08:00',
    isZDataCustomer: false,
  },
  {
    id: 5,
    company: 'Bedrift Alpha AS',
    orgNumber: '123123123',
    description: 'Venter på onboarding fra Uni.',
    fileTypes: 'CS50',
    bic: 'FHFH18',
    accountant: 'Sand økonomi',
    lastReceived: '20/04/2021 08:00',
    isZDataCustomer: true,
  },
  {
    id: 6,
    company: 'Bedrift Alpha AS',
    orgNumber: '123123123',
    description: 'Venter på onboarding fra Uni.',
    fileTypes: 'C053, C54C',
    bic: 'SPRNO22',
    accountant: 'VIEW Frilans',
    lastReceived: '28/06/2021 08:00',
    isZDataCustomer: true,
  },
  {
    id: 7,
    company: 'Bedrift Alpha AS',
    orgNumber: '123123123',
    description: 'Venter på onboarding fra Uni.',
    fileTypes: 'C053, C54C',
    bic: 'SPRNO22',
    accountant: 'Borgund Regnskap AS',
    lastReceived: '30/04/2021 08:00',
    isZDataCustomer: false,
  },
  {
    id: 8,
    company: 'Bedrift Alpha AS',
    orgNumber: '123123123',
    description: 'Venter på onboarding fra Uni.',
    fileTypes: 'C053, C54C',
    bic: 'SPRNO22',
    accountant: 'Borgund Regnskap AS',
    lastReceived: '30/04/2021 08:00',
    isZDataCustomer: false,
  },
  {
    id: 9,
    company: 'Bedrift Alpha AS',
    orgNumber: '123123123',
    description: 'Venter på onboarding fra Uni.',
    fileTypes: 'C053, C54C',
    bic: 'SPRNO22',
    accountant: 'Borgund Regnskap AS',
    lastReceived: '30/04/2021 08:00',
    isZDataCustomer: false,
  },
  {
    id: 10,
    company: 'Coop AS',
    orgNumber: '123123123',
    description: 'Venter på onboarding fra Uni.',
    fileTypes: 'C053, C54C',
    bic: 'SPRNO22',
    accountant: 'Borgund Regnskap AS',
    lastReceived: '30/04/2021 08:00',
    isZDataCustomer: false,
  },
  {
    id: 11,
    company: 'Kiwi',
    orgNumber: '123123123',
    description: 'Venter på onboarding fra Uni.',
    fileTypes: 'C053, C54C',
    bic: 'SPRNO22',
    accountant: 'Borgund Regnskap AS',
    lastReceived: '30/04/2021 08:00',
    isZDataCustomer: false,
  },
  {
    id: 12,
    company: 'REMA 1000',
    orgNumber: '123123123',
    description: 'Venter på onboarding fra Uni.',
    fileTypes: 'C053, C54C',
    bic: 'SPRNO22',
    accountant: 'Borgund Regnskap AS',
    lastReceived: '30/04/2021 08:00',
    isZDataCustomer: false,
  },
]

const columns = [
  {
    name: 'Bedrift',
    selector: 'company',
    sortable: true,
    cell: (row) => (
      <div>
        <span>{row.company}</span>
        <br />
        <span
          style={{
            fontSize: '13px',
            color: '#aaa',
            position: 'relative',
            top: '4px',
          }}
        >
          {row.orgNumber}
        </span>
      </div>
    ),
  },
  {
    name: 'Beskrivelse',
    selector: 'description',
    sortable: true,
    cell: (row) => <span className="fs-7">{row.description}</span>,
  },
  {
    name: 'Filtyper',
    selector: 'fileTypes',
    sortable: true,
  },
  {
    name: 'BIC',
    selector: 'bic',
    sortable: true,
  },
  {
    name: 'Regnskapsfører',
    selector: 'accountant',
    sortable: true,
  },
  {
    name: 'Sist Mottatt',
    selector: 'lastReceived',
    sortable: true,
  },
]

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
      backgroundColor: '#eee',
    },
  },
]

const Table = () => {
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
          .some((k) =>
            item[k].toString().toLowerCase().includes(searchQuery.toLowerCase())
          )
      })
    )
  }, [searchQuery, setSearchQuery])

  useEffect(() => {
    if (filterZDataCustomers) {
      setFilteredData(data.filter((item) => item.isZDataCustomer))
    } else {
      setFilteredData(data)
    }
  }, [filterZDataCustomers, setFilterZDataCustomers])

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
      selectableRowsNoSelectAll
      conditionalRowStyles={conditionalRowStyles}
      progressPending={tableLoading}
      progressComponent={<Spinner />}
      pagination
      noHeader
      subHeader
      subHeaderAlign="left"
      subHeaderComponent={
        <SubHeader
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
  setSearchQuery,
  setFilterZDataCustomers,
  handleRefresh,
  disableRefreshButton,
}) => {
  return (
    <div className="row w-100" id="table-subheader">
      <div className="col-lg-6">
        <div className="input-group mb-3">
          <span className="input-group-text" id="search-icon">
            <i className="ai-search fs-4"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Skriv inn her for å søke.."
            aria-label="Search"
            aria-describedby="search-icon"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="col-lg-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="zdata-customers"
            onClick={(e) => setFilterZDataCustomers(e.target.checked)}
          />
          <label className="form-check-label" for="zdata-customers">
            Kun ZData Kunder
          </label>
        </div>
      </div>
      <div className="col-lg-3">
        <button
          type="button"
          className="btn btn-link"
          onClick={() => handleRefresh()}
          disabled={disableRefreshButton}
        >
          <i className="ai-refresh-cw me-2"></i>
          Refresh
        </button>
      </div>
    </div>
  )
}

const Checkbox = () => {
  return <input className="form-check-input" type="checkbox" id="checkbox" />
}

export default Table
