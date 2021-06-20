import { forwardRef } from 'react'
import DataTable from 'react-data-table-component'

const data = [
  {
    id: 1,
    company: 'Bedrift Alpha AS',
    description: 'Venter på onboarding fra Uni.',
    fileTypes: 'C053, C54C',
    bic: 'SPRNO22',
    accountant: 'Borgund Regnskap AS',
    lastReceived: '22/04/2021 08:00',
  },
  {
    id: 1,
    company: 'Bedrift Alpha AS',
    description: 'Venter på onboarding fra Uni.',
    fileTypes: 'C053, C54C',
    bic: 'SPRNO22',
    accountant: 'Borgund Regnskap AS',
    lastReceived: '22/04/2021 08:00',
  },
  {
    id: 1,
    company: 'Bedrift Alpha AS',
    description: 'Venter på onboarding fra Uni.',
    fileTypes: 'C053, C54C',
    bic: 'SPRNO22',
    accountant: 'Borgund Regnskap AS',
    lastReceived: '22/04/2021 08:00',
  },
  {
    id: 1,
    company: 'Bedrift Alpha AS',
    description: 'Venter på onboarding fra Uni.',
    fileTypes: 'C053, C54C',
    bic: 'SPRNO22',
    accountant: 'Borgund Regnskap AS',
    lastReceived: '22/04/2021 08:00',
  },
  {
    id: 1,
    company: 'Bedrift Alpha AS',
    description: 'Venter på onboarding fra Uni.',
    fileTypes: 'C053, C54C',
    bic: 'SPRNO22',
    accountant: 'Borgund Regnskap AS',
    lastReceived: '22/04/2021 08:00',
  },
  {
    id: 1,
    company: 'Bedrift Alpha AS',
    description: 'Venter på onboarding fra Uni.',
    fileTypes: 'C053, C54C',
    bic: 'SPRNO22',
    accountant: 'Borgund Regnskap AS',
    lastReceived: '22/04/2021 08:00',
  },
  {
    id: 1,
    company: 'Bedrift Alpha AS',
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
  },
  {
    name: 'Beskrivelse',
    selector: 'description',
    sortable: true,
    right: true,
  },
  {
    name: 'Filtyper',
    selector: 'fileTypes',
    sortable: true,
    right: true,
  },
  {
    name: 'BIC',
    selector: 'bic',
    sortable: true,
    right: true,
  },
  {
    name: 'Regnskapsfører',
    selector: 'accountant',
    sortable: true,
    right: true,
  },
  {
    name: 'Sist Mottatt',
    selector: 'lastReceived',
    sortable: true,
    right: true,
  },
]

const Dashboard = () => {
  return (
    <div className="container-fluid mt-3 me-5" id="table">
      <DataTable
        title="Arnold Movies"
        theme="dark"
        columns={columns}
        data={data}
        selectableRows
        selectableRowsComponent={CustomCheckbox}
        selectableRowsNoSelectAll
        noHeader
        subHeader
        subHeaderAlign="left"
        subHeaderComponent={
          <div class="input-group mt-2 mb-3 bg-dark w-50">
            <span
              class="input-group-text bg-dark text-white border-0"
              id="basic-addon1"
            >
              <i className="bi bi-search fs-5"></i>
            </span>
            <input
              type="text"
              class="form-control bg-dark text-white border-0"
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

const CustomCheckbox = forwardRef(({ onClick, ...rest }, ref) => (
  <div className="form-check">
    <input
      type="checkbox"
      className="form-check-input"
      id="checkbox"
      ref={ref}
      {...rest}
    />
    <label className="form-check-label" for="checkbox" />
  </div>
))

export default Dashboard
