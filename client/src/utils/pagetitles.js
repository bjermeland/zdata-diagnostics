const pageTitles = [
  'AgreementFileQueues',
  'DnbConnector',
  'DnbSignedConnector',
  'EvryConnector',
  'NordeaConnector',
  'SdcConnector',
  'SebConnector',
  'Support Cases',
]

//* Returns breadcrumb items by pathname
export const getBreadcrumbsByPath = (path) => {
  const pages = path.split('/')

  return pages
    .filter((page) => page !== '')
    .map((page, index) => {
      if (!isGuid(page)) page = page.replace('-', ' ')

      const found = pageTitles.find((title) => title.toLowerCase().replace(' ', '-') === page)

      return {
        name: found ? found : page,
        href: `/${pages.slice(1, index + 2).join('/')}`,
      }
    })
}

export const isGuid = (string) => {
  return string.match('^[{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?$')
}
