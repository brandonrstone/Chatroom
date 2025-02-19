import { ComponentPropsWithoutRef, ElementType } from 'react'

const ButtonStyles = {
  sm: 'p-2 text-xs font-bold bg-primary cursor-pointer hover:bg-primary/80 active:scale-95 transition-all ',
  md: 'p-4 px-5 font-bold bg-primary cursor-pointer hover:bg-primary/80 active:scale-95 transition-all',
  lg: 'p-5 px-6 text-xl font-bold bg-primary cursor-pointer hover:bg-primary/80 active:scale-95 transition-all',
  xl: 'p-6 px-8 text-2xl font-bold bg-primary cursor-pointer hover:bg-primary/80 active:scale-95 transition-all'
}

type ButtonProps<T extends ElementType = 'button'> = ComponentPropsWithoutRef<T> & {
  As?: T
  className?: string
  pill?: boolean
  size?: keyof typeof ButtonStyles
}

export function Button<T extends ElementType = 'button'>({ As, className, pill, size = 'md', ...props }: ButtonProps<T>) {
  const Component = As ?? 'button'
  return <Component className={`block my-2 ${className ?? ''} ${pill ? 'rounded-full' : 'rounded-md'} ${ButtonStyles[size]}`} {...props} />
}