import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { getBreadcrumbsByPath } from '../../utils/pagetitles'
import Breadcrumbs from '../ui/Breadcrumbs'
import Spinner from '../ui/Spinner'
import Table from './Table'

interface BreadcrumbLink {
  name: string
  href: string
}

const UnmappedFiles = ({ location }: { location: Location }) => {
  const [currentPage, setCurrentPage] = useState<string | null>(null)
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbLink[]>([])
  const history = useHistory()

  useEffect(() => {
    const breadcrumbs = getBreadcrumbsByPath(location.pathname)
    setCurrentPage(breadcrumbs[breadcrumbs.length - 1].name)
    setBreadcrumbs(breadcrumbs)
  }, [location, history])

  const handleRowClick = (row) => {
    history.push(`${location.pathname}/${row.orgNumber}`)
  }

  //* If name exists of 3 letters, change all to uppercase
  //* For example. SEB, SDC
  const formatName = (name) => {
    return name
      .split(' ')
      .map((word) => (word.length === 3 ? `${word.toUpperCase()} ` : `${word} `))
  }

  const columns = [
    {
      name: 'Company',
      selector: 'company',
      sortable: true,
      cell: (row) => (
        <div onClick={() => handleRowClick(row)}>
          {row.isZDataCustomer && (
            <span
              className="badge rounded-pill bg-primary px-1 me-1"
              style={{ position: 'relative', bottom: '2px' }}
            >
              C
            </span>
          )}
          <span>{row.company}</span>
          <span
            className="d-block my-1"
            style={{
              fontSize: '13px',
              color: '#aaa',
            }}
          >
            {row.orgNumber}
          </span>
        </div>
      ),
    },
    {
      name: 'Description',
      selector: 'description',
      sortable: true,
      cell: (row) => (
        <span onClick={() => handleRowClick(row)} style={{ fontSize: '11px' }}>
          {row.description}
        </span>
      ),
    },
    {
      name: 'File Types',
      selector: 'fileTypes',
      sortable: true,
    },
    {
      name: 'BIC',
      selector: 'bic',
      sortable: true,
    },
    {
      name: 'Last Received',
      selector: 'lastReceived',
      sortable: true,
    },
  ]

  const data = [
    {
      id: 1,
      company: 'Bedrift Alpha AS',
      orgNumber: '123123123',
      description: 'Venter på onboarding fra Uni.',
      fileTypes: 'C053, C54C',
      bic: 'SPRNO22',
      lastReceived: '22/04/2021 08:00',
      isZDataCustomer: false,
    },
    {
      id: 2,
      company: 'ZData AS',
      orgNumber: '123123123',
      description: '',
      fileTypes: 'SWIO',
      bic: 'SPRNO22',
      lastReceived: '22/04/2021 07:30',
      isZDataCustomer: true,
    },
    {
      id: 3,
      company: 'Bedrift Charlie 2 AS',
      orgNumber: '494182040',
      description: 'Disse ingår i konsernet Charlie Holdings. Venter på onboarding.',
      fileTypes: 'C053, C54C',
      bic: 'SPRNO22',
      lastReceived: '22/04/2021 12:01',
      isZDataCustomer: true,
    },
    {
      id: 4,
      company: 'Langtnavn Bygg AS',
      orgNumber: '123123123',
      description: 'Venter på onboarding fra Uni.',
      fileTypes: 'C053, C54C, CAMT',
      bic: 'SHEDNO22',
      lastReceived: '21/04/2021 12:00',
      isZDataCustomer: false,
    },
    {
      id: 5,
      company: 'Bedrift Alpha AS',
      orgNumber: '123123123',
      description: 'Venter på onboarding fra Uni.',
      fileTypes: 'CS50',
      bic: 'FHFH18',
      lastReceived: '20/04/2021 08:00',
      isZDataCustomer: false,
    },
    {
      id: 6,
      company: 'Delta AS',
      orgNumber: '123123123',
      description: 'Mottar filer, ingen avtale.',
      fileTypes: 'C053',
      bic: 'SPRNO22',
      lastReceived: '19/04/2021 08:00',
      isZDataCustomer: false,
    },
    {
      id: 7,
      company: 'Echo Eiendom AS',
      orgNumber: '123123123',
      description: 'Ikke lenger kunde.',
      fileTypes: 'C053, C54C, CAMT',
      bic: 'SPRNO22',
      lastReceived: '19/04/2021 07:50',
      isZDataCustomer: false,
    },
    {
      id: 8,
      company: 'Foxtrot Kjøkken AS',
      orgNumber: '123123123',
      description: '',
      fileTypes: 'C053, C54C, CAMT',
      bic: 'SPRNO22',
      lastReceived: '18/04/2021 10:00',
      isZDataCustomer: false,
    },
    {
      id: 9,
      company: 'Golfbane Oslo AS',
      orgNumber: '123123123',
      description: 'Venter på onboarding fra Uni.',
      fileTypes: 'SWIO',
      bic: 'SPSONO22',
      lastReceived: '18/04/2021 09:30',
      isZDataCustomer: false,
    },
    {
      id: 10,
      company: 'Coop AS',
      orgNumber: '123123123',
      description: 'Venter på onboarding fra Uni.',
      fileTypes: 'C053, C54C',
      bic: 'SPRNO22',
      lastReceived: '18/04/2021 08:00',
      isZDataCustomer: false,
    },
    {
      id: 11,
      company: 'Hotel Isaksen AS',
      orgNumber: '123123123',
      description: 'Ingen avtale, ingenting i Freshdesk.',
      fileTypes: 'C053',
      bic: 'SHEDNO22',
      lastReceived: '17/04/2021 08:00',
      isZDataCustomer: false,
    },
    {
      id: 12,
      company: 'Juliett Gelato AS',
      orgNumber: '123123123',
      description: 'Ingen avtale.',
      fileTypes: 'C053',
      bic: 'SPRNO22',
      lastReceived: '16/04/2021 08:00',
      isZDataCustomer: false,
    },
  ]

  return currentPage ? (
    <section>
      <div className="border-bottom pt-5 pb-2 mt-2 mb-4">
        <Breadcrumbs currentPage={currentPage} items={breadcrumbs} />
        <h1 className="pt-4 fs-2 text-capitalize text-eee">{formatName(currentPage)}</h1>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="card bg-dark-gray-light mb-3">
            <div className="pt-3 mb-3 pe-2" id="table">
              <Table
                columns={columns}
                data={data}
                onRowClicked={(row) => handleRowClick(row)}
                displayZDataCustomersFilter
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <Spinner />
  )
}

export default UnmappedFiles
