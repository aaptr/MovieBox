import { IChildrenProps } from '@/types/commonTypes'

export function Main({ children }: IChildrenProps) {
  return (
    <main className="max-w-screen-md mx-auto p-4 md:p-6 lg:p-8">{children}</main>
  )
}