import type { ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'ghost'

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: Variant
  icon?: ReactNode
  className?: string
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-navy text-white hover:bg-navy-deep shadow-lg shadow-navy/20',
  outline: 'border border-navy text-navy hover:bg-navy hover:text-white',
  ghost: 'text-navy hover:text-sky',
}

export function Button({ href, children, variant = 'primary', icon, className = '' }: ButtonProps) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-tight transition-colors duration-200 ${variantClasses[variant]} ${className}`}
    >
      {icon}
      {children}
    </a>
  )
}
