import { ThemeToggler } from "./themeToggler"

export function Header() {
  return (
    <header className="fixed-top flex justify-between">
      <h1>Header</h1>
      <ThemeToggler />
    </header>
  )
}