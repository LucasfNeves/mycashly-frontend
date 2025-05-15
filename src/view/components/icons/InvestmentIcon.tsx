interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  noBackground?: boolean // Propriedade opcional para remover o fundo
}

export function InvestmentIcon({ className, noBackground }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {!noBackground && <rect width="40" height="40" rx="20" fill="#BFDFF5" />}
      <path
        d="M12 24L17 19L22 23L28 16"
        stroke="#1A73E8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="17" cy="19" r="1.5" fill="#1A73E8" />
      <circle cx="22" cy="23" r="1.5" fill="#1A73E8" />
      <circle cx="28" cy="16" r="1.5" fill="#1A73E8" />
    </svg>
  )
}
