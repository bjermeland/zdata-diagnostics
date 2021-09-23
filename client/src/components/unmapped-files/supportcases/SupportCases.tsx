import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { getBreadcrumbsByPath } from '../../../utils/pagetitles'
import SupportCaseHeader from './Header'
import Spinner from '../../ui/Spinner'
import Table from '../Table'

interface BreadcrumbLink {
  name: string
  href: string
}

const SupportCases = ({ location }: { location: Location }) => {
  const [currentPage, setCurrentPage] = useState<string | null>(null)
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbLink[]>([])
  const history = useHistory()

  useEffect(() => {
    const breadcrumbs = getBreadcrumbsByPath(location.pathname)
    setCurrentPage(breadcrumbs[breadcrumbs.length - 1].name)
    setBreadcrumbs(breadcrumbs)
  }, [location])

  //* ---

  const getStatusByCode = (code) => {
    switch (code) {
      case 0:
        return 'Skal kontaktes'
      case 1:
        return 'Venter på svar'
      case 2:
        return 'Mottatt svar'

      default:
        return 'Skal kontaktes'
    }
  }

  const handleRowClick = (row) => history.push(`${location.pathname}/${row.id}`)

  const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
      cell: (row) => (
        <div onClick={() => handleRowClick(row)}>
          <span>{row.name}</span>
          <br />
          <span
            style={{
              fontSize: '12px',
              color: getStatusByCode(row.status) === 'Mottatt svar' ? '#0f8a01' : '#aaa',
              position: 'relative',
              top: '4px',
            }}
          >
            {getStatusByCode(row.status)}
          </span>
        </div>
      ),
    },
    {
      name: 'Author',
      selector: 'author',
      sortable: true,
    },
    {
      name: 'Freshdesk',
      selector: 'freshdesk',
      sortable: true,
      cell: (row) => (
        <a
          className="text-decoration-none"
          href="https://support.zdata.no"
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-underline-hover">#{row.freshdesk}</span>
        </a>
      ),
    },
    {
      name: 'Cases',
      selector: 'numberOfCases',
      sortable: true,
    },
    {
      name: 'Last Updated',
      selector: 'lastUpdated',
      sortable: true,
    },
    {
      name: 'Created',
      selector: 'created',
      sortable: true,
    },
  ]

  //* Status Codes
  //* 0 - Skal kontaktes
  //* 1 - Venter på svar
  //* 2 - Mottatt svar

  const data = [
    {
      id: 'e67af24e-5270-45c1-be0a-4511f041f78e',
      name: 'UniMicro',
      author: 'Marcus Eidsheim',
      freshdesk: '12422',
      numberOfCases: 4,
      status: 2,
      lastUpdated: '23/04/2021 07:30',
      created: '22/04/2021 07:30',
    },
    {
      id: 'e67a504e-5270-45c1-be0a-4511f041f78e',
      name: 'Sparebank 1 SMN',
      author: 'Matias Tonning',
      freshdesk: '120001',
      numberOfCases: 11,
      status: 2,
      lastUpdated: '23/04/2021 12:01',
      created: '21/04/2021 11:50',
    },
    {
      id: 'e67af04e-5273-45c1-be0a-4511f041f78e',
      name: 'Knif Regnskap',
      author: 'Lise Solheim',
      freshdesk: '11870',
      numberOfCases: 4,
      status: 0,
      lastUpdated: '22/04/2021 12:00',
      created: '21/04/2021 09:52',
    },
    {
      id: 'e67af04e-5270-45c1-be0a-4111f041f78e',
      name: 'BDO AS',
      author: 'Kjetil Tollevsen',
      freshdesk: '11566',
      numberOfCases: 7,
      status: 1,
      lastUpdated: '21/04/2021 08:02',
      created: '21/04/2021 09:10',
    },
  ]

  return currentPage ? (
    <section>
      <SupportCaseHeader currentPage={currentPage} breadcrumbs={breadcrumbs} />
      <div className="row">
        <div className="col-xl-12">
          <div className="card bg-dark-gray-light mb-3">
            <div className="pt-3 mb-3 pe-2" id="table">
              <Table
                columns={columns}
                data={data}
                onRowClicked={(row) => handleRowClick(row)}
                displaySupportCasesToolbar
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

export default SupportCases
