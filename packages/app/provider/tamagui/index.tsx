import { TamaguiProvider as TamaguiProviderOG, config } from '@my/ui'
import { useRootTheme } from '../theme'

export const TamaguiProvider = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  const [currentTheme] = useRootTheme()
  // const scheme = useColorScheme()

  return (
    <TamaguiProviderOG
      config={config}
      disableInjectCSS
      disableRootThemeClass
      defaultTheme={currentTheme}
    >
      {children}
    </TamaguiProviderOG>
  )
}
