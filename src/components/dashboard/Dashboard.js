import { forwardRef } from 'react'
import DataTable from 'react-data-table-component'
import Checkbox from 'rc-checkbox'
import 'rc-checkbox/assets/index.css'

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
    id: 1,
    company: 'Bedrift Alpha AS',
    orgNumber: '123123123',
    description: 'Venter på onboarding fra Uni.',
    fileTypes: 'C053, C54C',
    bic: 'SPRNO22',
    accountant: 'Borgund Regnskap AS',
    lastReceived: '22/04/2021 08:00',
  },
]

const columns = [
  {
    name: 'Bedrift',
    selector: 'company',
    sortable: true,
    cell: (row) => (
      <div>
        <span style={{ fontWeight: '600' }}>{row.company}</span>
        <br />
        <span style={{ fontSize: '13px', color: '#ccc' }}>{row.orgNumber}</span>
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
  headRow: {
    style: {
      backgroundColor: '#4f4f4f',
      minHeight: '56px',
    },
    denseStyle: {
      minHeight: '32px',
    },
  },
  rows: {
    style: {
      minHeight: '75px',
      fontSize: '15px',
    },
  },
  headCells: {
    style: {
      color: '#ccc',
      fontSize: '15px',
      fontWeight: '500',
    },
  },
}

const Dashboard = () => {
  return (
    <div className="container-fluid mt-3 me-5" id="table">
      <DataTable
        theme="dark"
        columns={columns}
        data={data}
        customStyles={customStyles}
        selectableRows
        selectableRowsComponent={CustomCheckbox}
        selectableRowsNoSelectAll
        noHeader
        subHeader
        subHeaderAlign="left"
        subHeaderComponent={
          <div className="input-group mt-2 mb-3 bg-dark w-50">
            <span
              className="input-group-text bg-dark text-white border-0"
              id="basic-addon1"
            >
              <i className="bi bi-search fs-5"></i>
            </span>
            <input
              type="text"
              className="form-control bg-dark text-white border-0"
              placeholder="Skriv inn her for å søke.."
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        }
      />
    </div>
  )
}

const CustomCheckbox = forwardRef(({ onClick, ...rest }, ref) => <Checkbox />)

export default Dashboard
