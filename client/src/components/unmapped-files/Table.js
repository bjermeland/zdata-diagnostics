import { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'

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

const Table = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredData, setFilteredData] = useState(data)

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

  return (
    <DataTable
      columns={columns}
      data={filteredData}
      customStyles={customStyles}
      selectableRows
      selectableRowsComponent={Checkbox}
      selectableRowsNoSelectAll
      pagination
      noHeader
      subHeader
      subHeaderAlign="left"
      subHeaderComponent={
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
      }
    />
  )
}

const Checkbox = () => {
  return <input class="form-check-input" type="checkbox" id="checkbox" />
}

export default Table
