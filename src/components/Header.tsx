import { NavLink } from 'react-router-dom'
import { ThemeToggler } from '@/components/ThemeToggler'
import { UserAvatar } from '@/components/UserAvatar'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { QuickSearch } from '@/components/QuickSearch'
import { MenuBar } from '@/components/MenuBar'
import logo from '@/assets/logo.webp'

export function Header() {
  return (
    <header className="fixed top-0 w-full p-3 z-40 flex justify-between items-center bg-gray-800 text-white dark:border-b dark:border-gray-700">
      <div className="flex gap-12 items-center">
        <NavLink to="/" className="flex gap-3 items-center ps-2">
          <img src={logo} alt="MovieBox logo" className="w-12" />
          <h1 className="text-3xl font-bold text-indigo-500">MovieBox</h1>
        </NavLink>
        <MenuBar />
      </div>
      <div className="flex gap-10 items-center">
        <QuickSearch />
        <ThemeToggler />
        <LanguageSwitcher />
        <UserAvatar />
      </div>
    </header>
  )
}