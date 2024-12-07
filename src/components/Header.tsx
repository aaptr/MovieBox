import { ThemeToggler } from '@/components/themeToggler'
import { UserAvatar } from '@/components/UserAvatar'

export function Header() {
  return (
    <header className="fixed-top flex justify-between p-3">
      <h1>Header</h1>
      <ThemeToggler />
      <UserAvatar />
    </header>
  )
}