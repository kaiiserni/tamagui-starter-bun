import { CustomToast, ToastProvider } from '@my/ui'
import { JotaiProvider } from './jotai'
import { SolitoImageProvider } from './solito-image'
import { TamaguiProvider } from './tamagui'
import { TamaguiThemeProvider } from './theme'
import { ToastViewport } from './toast-viewport'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <JotaiProvider>
      <TamaguiThemeProvider>
        <TamaguiProvider>
          <SafeAreaProvider>
            <SolitoImageProvider>
              <ToastProvider swipeDirection="horizontal" duration={6000} native={['mobile']}>
                {children}
                <CustomToast />
                <ToastViewport />
              </ToastProvider>
            </SolitoImageProvider>
          </SafeAreaProvider>
        </TamaguiProvider>
      </TamaguiThemeProvider>
    </JotaiProvider>
  )
}
