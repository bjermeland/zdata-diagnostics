import { banks } from './banks/norway'

export const getBankNameByBic = (bic) => {
  return banks.find((i) => i.BIC === bic).Banknavn
}
