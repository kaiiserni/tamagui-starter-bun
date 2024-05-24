import { Provider as JotaiProviderOG } from 'jotai'

export const JotaiProvider = ({ children }: { children: React.ReactNode }) => {
  return <JotaiProviderOG>{children}</JotaiProviderOG>
}
