import { IChildrenProps } from '@/types/commonTypes'

export function Container({ children }: IChildrenProps) {
  return (
    <div className="pt-20">
      {children}
    </div>
  )
}
