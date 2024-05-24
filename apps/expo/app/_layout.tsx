import { Provider } from 'app/provider'
import { useFonts } from 'expo-font'
import { Stack, SplashScreen } from 'expo-router'
import { useColorScheme } from 'react-native'
import { useEffect } from 'react'

SplashScreen.preventAutoHideAsync()

export default function HomeLayout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })
  const scheme = useColorScheme()

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }
  return (
    <Provider>
      <Stack />
    </Provider>
  )
}
