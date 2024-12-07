import { ThemeToggler } from '@/components/themeToggler'
import { UserAvatar } from '@/components/UserAvatar'
import { LanguageSwitcher } from '@/components/LanguageSwitcher/LanguageSwitcher'

export function Header() {
  return (
    <header className="fixed top-0 w-full z-40 flex justify-between p-3 bg-gray-800 text-white">
      <h1>MovieBox</h1>
      <div className="flex gap-6">
        <ThemeToggler />
        <LanguageSwitcher />
        <UserAvatar />
      </div>
    </header>
  )
}