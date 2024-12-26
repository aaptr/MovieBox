import { IChildrenProps } from '@/types/commonTypes'

export function Main({ children }: IChildrenProps) {
  return (
    <main className="max-w-screen mx-auto">{children}</main>
  )
}