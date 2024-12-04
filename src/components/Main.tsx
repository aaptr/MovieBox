import { IChildrenProps } from '@/types/commonTypes'

export function Main({ children }: IChildrenProps) {
  return (
    <main className="mt-3">{children}</main>
  )
}