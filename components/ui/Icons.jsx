/** Custom line-icon set — clean medical UI stroke icons */
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

function Svg({ children, className = "h-6 w-6", strokeWidth = 1.7 }) {
  return (
    <svg {...base} strokeWidth={strokeWidth} className={className}>
      {children}
    </svg>
  );
}

const TOOTH_D =
  "M12 5.4c-1.4-1.3-4.3-1.8-5.7-.2-1.5 1.7-.9 4.3-.4 6.3.3 1.2.4 2.5.6 3.7.2 1.3.5 2.7 1.2 3.4.6.6 1.4.3 1.6-.6l.6-2.5c.2-.8 1.3-.8 1.5 0l.6 2.5c.2.9 1 1.2 1.6.6.7-.7 1-2.1 1.2-3.4.2-1.2.3-2.5.6-3.7.5-2 1.1-4.6-.4-6.3-1.4-1.6-4.3-1.1-5.7.2z";

export function Tooth(props) {
  return (
    <Svg {...props}>
      <path d={TOOTH_D} />
    </Svg>
  );
}

export function ToothCheck(props) {
  return (
    <Svg {...props}>
      <path d={TOOTH_D} />
      <path d="M9.2 9.8l1.9 1.9 3.4-3.6" />
    </Svg>
  );
}

export function ToothPlus(props) {
  return (
    <Svg {...props}>
      <path d={TOOTH_D} />
      <path d="M12 7.8v4.4M9.8 10h4.4" />
    </Svg>
  );
}

export function ToothSparkle(props) {
  return (
    <Svg {...props}>
      <path d={TOOTH_D} />
      <path d="M18.6 3.4l.6 1.7 1.7.6-1.7.6-.6 1.7-.6-1.7-1.7-.6 1.7-.6.6-1.7z" />
    </Svg>
  );
}

export function Shield(props) {
  return (
    <Svg {...props}>
      <path d="M12 3l7 2.6v5.1c0 4.6-2.9 8.5-7 10.3-4.1-1.8-7-5.7-7-10.3V5.6L12 3z" />
      <path d="M8.9 11.8l2.1 2.1 4-4.2" />
    </Svg>
  );
}

export function Feather(props) {
  return (
    <Svg {...props}>
      <path d="M19.7 4.3a5.6 5.6 0 0 0-8 0L5.5 10.5V19h8.5l5.7-6.2a5.6 5.6 0 0 0 0-8.5z" />
      <path d="M15.8 8.2L5.5 18.5M14.5 14.5H9.2" />
    </Svg>
  );
}

export function ChatHeart(props) {
  return (
    <Svg {...props}>
      <path d="M20.5 11.2c0 4-3.8 7.2-8.5 7.2-1 0-2-.15-2.9-.42L4 20l1.2-3.3C4 15.3 3.5 13.3 3.5 11.2 3.5 7.2 7.3 4 12 4s8.5 3.2 8.5 7.2z" />
      <path d="M12 13.6s-2.5-1.5-2.5-3.2c0-1.3 1.6-1.8 2.5-.6.9-1.2 2.5-.7 2.5.6 0 1.7-2.5 3.2-2.5 3.2z" />
    </Svg>
  );
}

export function Check(props) {
  return (
    <Svg {...props}>
      <path d="M5 12.5l4.2 4.3L19 7" />
    </Svg>
  );
}

export function Phone(props) {
  return (
    <Svg {...props}>
      <path d="M6.2 3.8h2.4l1.5 4-2 1.5a12.5 12.5 0 0 0 6.6 6.6l1.5-2 4 1.5v2.4a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.2 6a2 2 0 0 1 2-2.2z" />
    </Svg>
  );
}

export function Mail(props) {
  return (
    <Svg {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="M4 7.5l7.3 5a1.7 1.7 0 0 0 1.9 0l7.3-5" />
    </Svg>
  );
}

export function MapPin(props) {
  return (
    <Svg {...props}>
      <path d="M12 21c4-3.6 6.5-6.8 6.5-10.2A6.5 6.5 0 0 0 5.5 10.8C5.5 14.2 8 17.4 12 21z" />
      <circle cx="12" cy="10.6" r="2.4" />
    </Svg>
  );
}

export function Clock(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </Svg>
  );
}

export function Calendar(props) {
  return (
    <Svg {...props}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M8 3v4M16 3v4M3.5 10h17" />
    </Svg>
  );
}

export function Menu(props) {
  return (
    <Svg {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
  );
}

export function X(props) {
  return (
    <Svg {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Svg>
  );
}

export function Star(props) {
  const { className = "h-5 w-5", strokeWidth = 1.4, ...rest } = props;
  return (
    <svg
      {...base}
      strokeWidth={strokeWidth}
      className={className}
      {...rest}
    >
      <path d="M12 3.6l2.55 5.2 5.75.85-4.15 4.05 1 5.7L12 16.7l-5.15 2.7 1-5.7-4.15-4.05 5.75-.85L12 3.6z" />
    </svg>
  );
}

export function Sparkle(props) {
  return (
    <Svg {...props}>
      <path d="M12 4l1.5 4.5L18 10l-4.5 1.5L12 16l-1.5-4.5L6 10l4.5-1.5L12 4z" />
      <path d="M18.8 15.2l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2z" />
    </Svg>
  );
}

export function Heart(props) {
  return (
    <Svg {...props}>
      <path d="M12 20s-7.5-4.4-7.5-9.4c0-2.5 3-3.7 4.9-1.9L12 11l2.6-2.3c1.9-1.8 4.9-.6 4.9 1.9 0 5-7.5 9.4-7.5 9.4z" />
    </Svg>
  );
}

export function Smile(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.5 13.5a4.4 4.4 0 0 0 7 0M9 9.8h.01M15 9.8h.01" />
    </Svg>
  );
}

export function ArrowRight(props) {
  return (
    <Svg {...props}>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </Svg>
  );
}

export function ArrowUpRight(props) {
  return (
    <Svg {...props}>
      <path d="M7 17L17 7M9 7h8v8" />
    </Svg>
  );
}

export function Quote(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={props.className || "h-6 w-6"}
    >
      <path d="M9.6 5.5c-3.1 1.2-5.1 4-5.1 7.6 0 3.2 1.9 5.4 4.6 5.4 2.2 0 3.9-1.7 3.9-3.8 0-2-1.4-3.5-3.3-3.5-.4 0-.8.1-1 .2.4-2 1.9-3.7 3.8-4.6l-2.9-1.3zm9.3 0c-3.1 1.2-5.1 4-5.1 7.6 0 3.2 1.9 5.4 4.6 5.4 2.2 0 3.9-1.7 3.9-3.8 0-2-1.4-3.5-3.3-3.5-.4 0-.8.1-1 .2.4-2 1.9-3.7 3.8-4.6l-2.9-1.3z" />
    </svg>
  );
}

export function GoogleG({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.4 5.4 0 0 1-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A11.99 11.99 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29a7.2 7.2 0 0 1 0-4.58V6.62H1.29a12 12 0 0 0 0 10.76l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"
      />
    </svg>
  );
}

export function Instagram({ className = "h-5 w-5", strokeWidth = 1.7 }) {
  return (
    <svg {...base} strokeWidth={strokeWidth} className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="16.8" cy="7.2" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Facebook({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M14 8.5h2.5V5.2H14c-2.4 0-4.3 1.9-4.3 4.3v2H7.2v3.3h2.5v7.2h3.4v-7.2h2.6l.5-3.3h-3.1V9.5c0-.6.4-1 1-1z" />
    </svg>
  );
}

export function IconByName({ name, ...props }) {
  const map = {
    tooth: Tooth,
    toothCheck: ToothCheck,
    toothPlus: ToothPlus,
    toothSparkle: ToothSparkle,
    shield: Shield,
    feather: Feather,
    chatHeart: ChatHeart,
    heart: Heart,
    smile: Smile,
    sparkle: Sparkle,
  };
  const Cmp = map[name] || Tooth;
  return <Cmp {...props} />;
}
