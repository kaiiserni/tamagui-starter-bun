import type { ButtonProps } from 'tamagui'
import { Monitor, Moon, Sun } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { Button, useIsomorphicLayoutEffect } from 'tamagui'
import { useAppTheme } from 'app/atoms/theme'

const icons = {
  system: Monitor,
  light: Sun,
  dark: Moon,
}

export const ThemeToggle = (props: ButtonProps) => {
  const [currentTheme, setCurrentTheme] = useAppTheme()

  const toggle = () => {
    let nextTheme

    switch (currentTheme) {
      case 'light':
        nextTheme = 'dark'
        break
      case 'dark':
        nextTheme = 'system'
        break
      case 'system':
        nextTheme = 'light'
        break
      default:
        nextTheme = 'system'
    }

    setCurrentTheme(nextTheme)
  }

  return (
    <Button
      size="$4"
      onPress={toggle}
      aria-label="Toggle color scheme"
      icon={icons[currentTheme]}
      {...props}
    />
  )
}
