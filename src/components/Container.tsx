import { IChildrenProps } from '@/types/commonTypes'

export function Container({ children }: IChildrenProps) {
  return (
    <div className="">
      {children}
    </div>
  )
}
