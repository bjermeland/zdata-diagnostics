import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const services = [
  {
    name: 'BankService',
    status: 'success',
    lastUpdate: new Date('08-06-2021 08:30'),
  },
  {
    name: 'BankTransferService',
    status: 'warning',
    lastUpdate: new Date('08-06-2021 08:24'),
  },
  {
    name: 'Heartbeats Service',
    status: 'success',
    lastUpdate: new Date('08-06-2021 08:36'),
  },
  // {
  //   name: 'Mail API',
  //   status: 'danger',
  //   lastUpdate: new Date('07-06-2021 08:30'),
  // },
  // {
  //   name: 'MailService',
  //   status: 'danger',
  //   lastUpdate: new Date('07-06-2021 08:30'),
  // },
  // {
  //   name: 'Partner',
  //   status: 'danger',
  //   lastUpdate: new Date('08-04-2021 08:30'),
  // },
  {
    name: 'Pay Admin',
    status: 'danger',
    lastUpdate: new Date('08-06-2021 06:30'),
  },
  // {
  //   name: 'Template API',
  //   status: 'success',
  //   lastUpdate: new Date('08-06-2021 08:31'),
  // },
]

const Services = () => {
  return (
    <>
      <h2 className="pt-2 fs-4">Services</h2>
      <div className="my-5">
        {services.map((item, index) => {
          return (
            <div
              key={index}
              className={`alert alert-${item.status} py-4 px-5 mb-2`}
            >
              {item.name}
              <div className="float-end">
                <small>
                  <span className="fw-500">
                    {dayjs(item.lastUpdate).fromNow()}
                  </span>
                  {' - '}
                  {dayjs(item.lastUpdate).format(
                    'DD.MM.YYYY HH:mm'
                  )}
                </small>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Services
