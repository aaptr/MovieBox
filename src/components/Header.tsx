import { ThemeToggler } from '@/components/themeToggler'
import { UserAvatar } from '@/components/UserAvatar'
import { LanguageSwitcher } from '@/components/LanguageSwitcher/LanguageSwitcher'

export function Header() {
  return (
    <header className="fixed-top flex justify-between p-3 bg-gray-800 text-white">
      <h1>Header</h1>
      <ThemeToggler />
      <LanguageSwitcher />
      <UserAvatar />
    </header>
  )
}