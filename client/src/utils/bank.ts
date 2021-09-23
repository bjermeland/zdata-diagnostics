import { banks } from './banks/norway'

export const getBankNameByBic = (bic: string): string => {
  return banks.find((i) => i.BIC === bic)?.Banknavn ?? ''
}
