import { useForceUpdate } from '@my/ui'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useAppTheme, useCurrentTheme } from 'app/atoms/theme'
import { ThemeVariant } from 'app/utils/theme'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { Appearance } from 'react-native'

export const TamaguiThemeProvider = ({
  children,
}: {
  children: React.ReactNode
}): React.ReactNode => {
  const [appTheme, setAppTheme] = useAppTheme()
  const [currentTheme] = useCurrentTheme()
  const forceUpdate = useForceUpdate()

  const defaultTheme = 'system'
  const statusBarStyle = currentTheme === ThemeVariant.dark ? ThemeVariant.light : ThemeVariant.dark
  const themeValue = currentTheme === ThemeVariant.dark ? DarkTheme : DefaultTheme

  useEffect(() => {
    const systemThemeChangeListener = Appearance.addChangeListener(() => {
      setAppTheme(Appearance.getColorScheme() as ThemeVariant)
      forceUpdate()
    })
    return () => {
      systemThemeChangeListener.remove()
    }
  }, [setAppTheme, forceUpdate])

  useEffect(() => {
    if (appTheme === undefined) {
      setAppTheme(defaultTheme)
    }
  }, [appTheme, setAppTheme])

  return (
    <ThemeProvider value={themeValue}>
      <StatusBar style={statusBarStyle} />
      {children}
    </ThemeProvider>
  )
}

export const useRootTheme = () => {
  const [currentTheme] = useCurrentTheme()
  return [currentTheme]
}
