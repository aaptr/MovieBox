import { NavLink } from 'react-router-dom'
import { ThemeToggler } from '@/components/ThemeToggler'
import { UserAvatar } from '@/components/UserAvatar'
import { LanguageSwitcher } from '@/components/LanguageSwitcher/LanguageSwitcher'
import { QuickSearch } from '@/components/QuickSearch'
import { MenuBar } from '@/components/MenuBar'

export function Header() {
  return (
    <header className="fixed top-0 w-full p-3 z-40 flex justify-between items-center
    bg-gray-800 text-white">
      <NavLink to="/">
        <h1 className="text-3xl font-bold">MovieBox</h1>
      </NavLink>
      <div className="items-center">
        <MenuBar />
      </div>
      <div className="flex gap-6 items-center">
        <QuickSearch />
        <ThemeToggler />
        <LanguageSwitcher />
        <UserAvatar />
      </div>
    </header>
  )
}