'use client'

interface IconProps {
  name: string
  size?: number
  color?: string
}

const icons: Record<string, (s: number, c: string) => React.ReactElement> = {
  bolt: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <path
        d='M13.5 2L4 13.5h6.5L9.5 22 19 10.5h-6.5L13.5 2z'
        fill={c}
        stroke={c}
        strokeWidth='0.5'
        strokeLinejoin='round'
      />
    </svg>
  ),
  home: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <path
        d='M3 11l9-8 9 8v9a2 2 0 01-2 2h-4v-7h-6v7H5a2 2 0 01-2-2v-9z'
        stroke={c}
        strokeWidth='2.2'
        strokeLinejoin='round'
        strokeLinecap='round'
      />
    </svg>
  ),
  homeFill: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <path
        d='M3 11l9-8 9 8v9a2 2 0 01-2 2h-4v-7h-6v7H5a2 2 0 01-2-2v-9z'
        fill={c}
        stroke={c}
        strokeWidth='2'
        strokeLinejoin='round'
      />
    </svg>
  ),
  doc: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <path
        d='M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9l-6-6z'
        stroke={c}
        strokeWidth='2.2'
        strokeLinejoin='round'
      />
      <path
        d='M14 3v6h6M8 13h8M8 17h5'
        stroke={c}
        strokeWidth='2.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  info: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <circle cx='12' cy='12' r='9.5' stroke={c} strokeWidth='2.2' />
      <path
        d='M12 11v6M12 7.5v.01'
        stroke={c}
        strokeWidth='2.4'
        strokeLinecap='round'
      />
    </svg>
  ),
  infoFill: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <circle cx='12' cy='12' r='10' fill={c} />
      <path
        d='M12 11v6M12 7.5v.01'
        stroke='#fff'
        strokeWidth='2.6'
        strokeLinecap='round'
      />
    </svg>
  ),
  card: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <rect
        x='2.5'
        y='5.5'
        width='19'
        height='14'
        rx='2.5'
        stroke={c}
        strokeWidth='2.2'
      />
      <path d='M2.5 10h19' stroke={c} strokeWidth='2.2' />
    </svg>
  ),
  cardFill: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <rect x='2.5' y='5.5' width='19' height='14' rx='2.5' fill={c} />
      <path d='M2.5 10h19' stroke='#fff' strokeWidth='2' />
    </svg>
  ),
  dollar: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <path
        d='M12 3v18M16 7H10a3 3 0 000 6h4a3 3 0 010 6H7'
        stroke={c}
        strokeWidth='2.4'
        strokeLinecap='round'
      />
    </svg>
  ),
  trendUp: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <path
        d='M3 17l6-6 4 4 8-8'
        stroke={c}
        strokeWidth='2.4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14 7h7v7'
        stroke={c}
        strokeWidth='2.4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  calendar: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <rect
        x='3.5'
        y='5.5'
        width='17'
        height='15'
        rx='2.5'
        stroke={c}
        strokeWidth='2.2'
      />
      <path
        d='M3.5 10h17M8 3v4M16 3v4'
        stroke={c}
        strokeWidth='2.2'
        strokeLinecap='round'
      />
    </svg>
  ),
  pin: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <path
        d='M12 22s7-7.5 7-13a7 7 0 10-14 0c0 5.5 7 13 7 13z'
        stroke={c}
        strokeWidth='2.2'
        strokeLinejoin='round'
      />
      <circle cx='12' cy='9.5' r='2.7' stroke={c} strokeWidth='2.2' />
    </svg>
  ),
  check: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <path
        d='M5 12.5l4.5 4.5L20 7'
        stroke={c}
        strokeWidth='2.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  checkCircle: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <circle cx='12' cy='12' r='10' stroke={c} strokeWidth='2.2' />
      <path
        d='M7.5 12.5l3 3 6-6.5'
        stroke={c}
        strokeWidth='2.4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  clock: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <circle cx='12' cy='12' r='9.5' stroke={c} strokeWidth='2.2' />
      <path
        d='M12 7v5l3 2'
        stroke={c}
        strokeWidth='2.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  chevRight: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <path
        d='M9 6l6 6-6 6'
        stroke={c}
        strokeWidth='2.6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  chevLeft: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <path
        d='M15 6l-6 6 6 6'
        stroke={c}
        strokeWidth='2.6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  chevDown: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <path
        d='M6 9l6 6 6-6'
        stroke={c}
        strokeWidth='2.6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  phone: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <path
        d='M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z'
        stroke={c}
        strokeWidth='2.2'
        strokeLinejoin='round'
      />
    </svg>
  ),
  whatsapp: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <path
        d='M3 21l1.7-5A9 9 0 1112 21a9 9 0 01-4.3-1.1L3 21z'
        stroke={c}
        strokeWidth='2.2'
        strokeLinejoin='round'
      />
      <path
        d='M9 9c0 4 2 6 6 6l1.5-1.5L14 12l-1 1c-1 0-2-1-2-2l1-1-1.5-2.5L9 9z'
        fill={c}
      />
    </svg>
  ),
  question: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <circle cx='12' cy='12' r='10' stroke={c} strokeWidth='2.2' />
      <path
        d='M9 9.5a3 3 0 116 0c0 1.5-1.5 2-2.5 2.5s-.5 1.5-.5 2M12 17.5v.01'
        stroke={c}
        strokeWidth='2.2'
        strokeLinecap='round'
      />
    </svg>
  ),
  speaker: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <path d='M11 5L6 9H3v6h3l5 4V5z' fill={c} />
      <path
        d='M15 9c1 1 1 5 0 6M18 7c2.5 2 2.5 8 0 10'
        stroke={c}
        strokeWidth='2.2'
        strokeLinecap='round'
      />
    </svg>
  ),
  textSize: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <path
        d='M3 19l5-12 5 12M5 15h6'
        stroke={c}
        strokeWidth='2.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14 19l3.5-8 3.5 8M15.5 16h4'
        stroke={c}
        strokeWidth='2.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  user: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <circle cx='12' cy='8' r='4' stroke={c} strokeWidth='2.2' />
      <path
        d='M4 21a8 8 0 0116 0'
        stroke={c}
        strokeWidth='2.2'
        strokeLinecap='round'
      />
    </svg>
  ),
  bell: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <path
        d='M6 16V11a6 6 0 1112 0v5l1.5 2h-15L6 16zM10 20a2 2 0 004 0'
        stroke={c}
        strokeWidth='2.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  eye: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <path
        d='M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z'
        stroke={c}
        strokeWidth='2.2'
        strokeLinejoin='round'
      />
      <circle cx='12' cy='12' r='3' stroke={c} strokeWidth='2.2' />
    </svg>
  ),
  shield: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <path
        d='M12 3l8 3v6c0 5-3.5 8.5-8 9.5C7.5 20.5 4 17 4 12V6l8-3z'
        stroke={c}
        strokeWidth='2.2'
        strokeLinejoin='round'
      />
      <path
        d='M9 12l2 2 4-4'
        stroke={c}
        strokeWidth='2.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  x: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <path
        d='M6 6l12 12M18 6L6 18'
        stroke={c}
        strokeWidth='2.6'
        strokeLinecap='round'
      />
    </svg>
  ),
  bank: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <path
        d='M3 10l9-6 9 6M5 10v8M19 10v8M9 10v8M15 10v8M3 19h18'
        stroke={c}
        strokeWidth='2.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  cash: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <rect
        x='2.5'
        y='6.5'
        width='19'
        height='11'
        rx='2'
        stroke={c}
        strokeWidth='2.2'
      />
      <circle cx='12' cy='12' r='2.5' stroke={c} strokeWidth='2.2' />
      <path
        d='M6 12h.01M18 12h.01'
        stroke={c}
        strokeWidth='2.4'
        strokeLinecap='round'
      />
    </svg>
  ),
  bulb: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <path
        d='M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c1 1 1.5 2 1.5 3.5h5c0-1.5.5-2.5 1.5-3.5A6 6 0 0012 3z'
        stroke={c}
        strokeWidth='2.2'
        strokeLinejoin='round'
        strokeLinecap='round'
      />
    </svg>
  ),
  wrench: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <path
        d='M14.5 4a4.5 4.5 0 015.5 5.5l-2-1.5-2 2 1.5 2A4.5 4.5 0 0112 7.5L4.5 15a2.1 2.1 0 003 3l7.5-7.5'
        stroke={c}
        strokeWidth='2.2'
        strokeLinejoin='round'
        strokeLinecap='round'
      />
    </svg>
  ),
  logout: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <path
        d='M15 4h4a2 2 0 012 2v12a2 2 0 01-2 2h-4M10 17l-5-5 5-5M5 12h11'
        stroke={c}
        strokeWidth='2.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  edit: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <path
        d='M3 17.5V21h3.5l11-11-3.5-3.5-11 11zM18 4.5l1.5-1.5a2 2 0 013 3L21 7.5 18 4.5z'
        stroke={c}
        strokeWidth='2.2'
        strokeLinejoin='round'
        strokeLinecap='round'
      />
    </svg>
  ),
  camera: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <path
        d='M3 8h3l2-3h8l2 3h3a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V9a1 1 0 011-1z'
        stroke={c}
        strokeWidth='2.2'
        strokeLinejoin='round'
      />
      <circle cx='12' cy='13' r='3.5' stroke={c} strokeWidth='2.2' />
    </svg>
  ),
  download: (s, c) => (
    <svg width={s} height={s} viewBox='0 0 24 24' fill='none'>
      <path
        d='M12 4v12M6 11l6 6 6-6M5 20h14'
        stroke={c}
        strokeWidth='2.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
}

export function Icon({ name, size = 24, color = 'currentColor' }: IconProps) {
  const fn = icons[name]
  return fn ? fn(size, color) : null
}

export function NeobitLogo({ size = 88 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background:
          'linear-gradient(135deg,#F29E08 0%,#EC8805 50%,#E25905 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow:
          '0 12px 32px rgba(226,89,5,.35), 0 4px 8px rgba(226,89,5,.18)',
        flexShrink: 0,
      }}
    >
      <Icon name='bolt' size={size * 0.52} color='#fff' />
    </div>
  )
}
