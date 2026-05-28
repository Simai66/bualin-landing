interface OrnamentProps {
  width?: number
  color?: string
}

export function Ornament({ width = 70, color = '#B8995A' }: OrnamentProps) {
  const scale = width / 70
  return (
    <svg
      width={width}
      height={Math.round(10 * scale)}
      viewBox="0 0 70 10"
      fill="none"
      style={{ display: 'block' }}
      aria-hidden
    >
      <line x1="0" y1="5" x2="28" y2="5" stroke={color} strokeWidth="0.6" />
      <circle cx="35" cy="5" r="2" fill="none" stroke={color} strokeWidth="0.7" />
      <circle cx="35" cy="5" r="0.6" fill={color} />
      <line x1="42" y1="5" x2="70" y2="5" stroke={color} strokeWidth="0.6" />
    </svg>
  )
}
