import { storageAtom } from 'app/utils/storageAtom'
import { ThemeVariant, type CurrentThemeVariant } from 'app/utils/theme'
import { atom, useAtom } from 'jotai'
import { Appearance } from 'react-native'

export const appThemeKey = 'appTheme'

const appThemeAtom = storageAtom<ThemeVariant>(
  'theme',
  Appearance.getColorScheme() as ThemeVariant
)

export function useAppTheme() {
  return [...useAtom(appThemeAtom)] as const
}

const currentThemeAtom = atom<CurrentThemeVariant>((get) => {
  const userTheme = get(appThemeAtom)
  if (userTheme === ThemeVariant.system) {
    return Appearance.getColorScheme() as CurrentThemeVariant
  }
  return userTheme
})

export function useCurrentTheme() {
  return [...useAtom(currentThemeAtom)] as const
}
