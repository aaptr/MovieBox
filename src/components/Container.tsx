import { IChildrenProps } from '@/types/commonTypes'

export function Container({ children }: IChildrenProps) {
  return (
    <div className="pt-14 flex-1">
      {children}
    </div >
  )
}
