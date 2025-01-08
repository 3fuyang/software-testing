import { useEffect, type PropsWithChildren } from 'react'
import { useTernaryDarkMode } from 'usehooks-ts'

export function ThemeProvider(props: PropsWithChildren) {
  const { isDarkMode } = useTernaryDarkMode({
    // For SSR usage
    // @see https://github.com/juliencrn/usehooks-ts/issues/644
    initializeWithValue: false,
  })

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return props.children
}
