interface LeafSprayProps {
  size?: number
  opacity?: number
  flip?: boolean
  color?: string
}

export function LeafSpray({
  size = 360,
  opacity = 0.5,
  flip = false,
  color = '#B8995A',
}: LeafSprayProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      style={{ opacity, transform: flip ? 'scaleX(-1)' : undefined, display: 'block' }}
      aria-hidden
    >
      <path d="M 30 180 Q 80 120 110 30" stroke={color} strokeWidth="0.7" fill="none" />
      <g stroke={color} strokeWidth="0.5" fill="none">
        <ellipse cx="55" cy="148" rx="22" ry="6" transform="rotate(-30 55 148)" />
        <ellipse cx="72" cy="122" rx="24" ry="7" transform="rotate(-40 72 122)" />
        <ellipse cx="86" cy="96" rx="26" ry="7" transform="rotate(-55 86 96)" />
        <ellipse cx="98" cy="68" rx="24" ry="6" transform="rotate(-70 98 68)" />
        <ellipse cx="106" cy="44" rx="20" ry="5" transform="rotate(-85 106 44)" />
        <ellipse cx="45" cy="160" rx="16" ry="4.5" transform="rotate(20 45 160)" />
        <ellipse cx="62" cy="135" rx="18" ry="5" transform="rotate(15 62 135)" />
        <ellipse cx="78" cy="108" rx="20" ry="5.5" transform="rotate(5 78 108)" />
      </g>
    </svg>
  )
}
