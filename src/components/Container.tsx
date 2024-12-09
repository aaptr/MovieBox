import { IChildrenProps } from '@/types/commonTypes'

export function Container({ children }: IChildrenProps) {
  return (
    <div className="pt-1 mt-14">
      {children}
    </div>
  )
}
