interface CountryNameProps {
  country: string
  className?: string
}

interface CountryFlagProps {
  country: string
}

function FranceFlag() {
  return (
    <svg viewBox="0 0 24 16" className="h-4 w-6 shrink-0 rounded-[2px] shadow-sm" aria-hidden="true">
      <rect width="8" height="16" x="0" fill="#0055A4" />
      <rect width="8" height="16" x="8" fill="#FFFFFF" />
      <rect width="8" height="16" x="16" fill="#EF4135" />
    </svg>
  )
}

function JapanFlag() {
  return (
    <svg viewBox="0 0 24 16" className="h-4 w-6 shrink-0 rounded-[2px] shadow-sm" aria-hidden="true">
      <rect width="24" height="16" fill="#FFFFFF" />
      <circle cx="12" cy="8" r="4.2" fill="#BC002D" />
    </svg>
  )
}

function ChinaFlag() {
  return (
    <svg viewBox="0 0 24 16" className="h-4 w-6 shrink-0 rounded-[2px] shadow-sm" aria-hidden="true">
      <rect width="24" height="16" fill="#DE2910" />
      <polygon points="4.2,2.1 4.9,4.1 7,4.1 5.3,5.4 6,7.4 4.2,6.2 2.5,7.4 3.1,5.4 1.4,4.1 3.5,4.1" fill="#FFDE00" />
      <circle cx="8.2" cy="2.8" r="0.65" fill="#FFDE00" />
      <circle cx="9.6" cy="4.6" r="0.65" fill="#FFDE00" />
      <circle cx="9.5" cy="6.8" r="0.65" fill="#FFDE00" />
      <circle cx="7.9" cy="8.3" r="0.65" fill="#FFDE00" />
    </svg>
  )
}

function UnitedStatesFlag() {
  const redStripes = [0, 4, 8, 12]

  return (
    <svg viewBox="0 0 24 16" className="h-4 w-6 shrink-0 rounded-[2px] shadow-sm" aria-hidden="true">
      <rect width="24" height="16" fill="#FFFFFF" />
      {redStripes.map((y) => (
        <rect key={y} width="24" height="2" y={y} fill="#B22234" />
      ))}
      <rect width="10.5" height="8.5" fill="#3C3B6E" />
      {[2, 5, 8].map((x) => (
        <g key={x} fill="#FFFFFF">
          <circle cx={x} cy="2" r="0.55" />
          <circle cx={x} cy="4.3" r="0.55" />
          <circle cx={x} cy="6.6" r="0.55" />
        </g>
      ))}
    </svg>
  )
}

function UnitedKingdomFlag() {
  return (
    <svg viewBox="0 0 24 16" className="h-4 w-6 shrink-0 rounded-[2px] shadow-sm" aria-hidden="true">
      <rect width="24" height="16" fill="#012169" />
      <path d="M0 0 L24 16 M24 0 L0 16" stroke="#FFFFFF" strokeWidth="4.2" />
      <path d="M0 0 L24 16 M24 0 L0 16" stroke="#C8102E" strokeWidth="1.7" />
      <path d="M12 0 V16 M0 8 H24" stroke="#FFFFFF" strokeWidth="5" />
      <path d="M12 0 V16 M0 8 H24" stroke="#C8102E" strokeWidth="2.7" />
    </svg>
  )
}

export function CountryFlag({ country }: CountryFlagProps) {
  switch (country) {
    case 'États-Unis':
      return <UnitedStatesFlag />
    case 'Chine':
      return <ChinaFlag />
    case 'Japon':
      return <JapanFlag />
    case 'Grande-Bretagne':
      return <UnitedKingdomFlag />
    case 'France':
      return <FranceFlag />
    default:
      return null
  }
}

export function CountryName({ country, className = '' }: CountryNameProps) {
  return (
    <span className={`inline-flex max-w-full items-center gap-2 ${className}`.trim()}>
      <CountryFlag country={country} />
      <span className="min-w-0 break-words">{country}</span>
    </span>
  )
}
