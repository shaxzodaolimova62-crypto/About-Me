interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

/** Material Symbols (outlined) glyph. Decorative by default. */
export function Icon({ name, size, className = '' }: IconProps) {
  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined leading-none ${className}`}
      style={size ? { fontSize: size } : undefined}
    >
      {name}
    </span>
  );
}
