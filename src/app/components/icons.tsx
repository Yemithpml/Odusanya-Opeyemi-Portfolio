import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export const Icons = {
  html: (props: IconProps) => (
    <svg viewBox="0 0 128 128" {...props}>
      <path fill="#E44D26" d="M19 114L9 0h110l-10 114-45 14" />
      <path fill="#F16529" d="M64 117l36-10 9-97H64" />
      <path
        fill="#EBEBEB"
        d="M64 52H44l-1-14h21V24H29l4 45h31z"
      />
      <path
        fill="#fff"
        d="M64 52v14h18l-2 21-16 5v15l30-9 4-45z"
      />
    </svg>
  ),

  css: (props: IconProps) => (
    <svg viewBox="0 0 128 128" {...props}>
      <path fill="#1572B6" d="M19 114L9 0h110l-10 114-45 14" />
      <path fill="#33A9DC" d="M64 117l36-10 9-97H64" />
      <path
        fill="#fff"
        d="M64 66H44l-1-14h21V38H29l4 45h31z"
      />
    </svg>
  ),

  javascript: (props: IconProps) => (
    <svg viewBox="0 0 128 128" {...props}>
      <path fill="#F7DF1E" d="M0 0h128v128H0z" />
      <path d="M67 105c1 4 3 7 8 7 4 0 6-2 6-5 0-4-3-5-8-7l-3-1c-8-3-14-7-14-16 0-8 6-14 16-14 7 0 12 2 16 8l-9 6c-2-4-4-5-7-5-3 0-5 2-5 5s2 5 7 7l3 1c10 4 16 8 16 17 0 10-8 15-18 15-10 0-16-5-19-12z" />
    </svg>
  ),

  typescript: (props: IconProps) => (
    <svg viewBox="0 0 128 128" {...props}>
      <rect width="128" height="128" fill="#3178C6" />
      <text
        x="20"
        y="90"
        fontSize="64"
        fill="#fff"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="bold"
      >
        TS
      </text>
    </svg>
  ),

  react: (props: IconProps) => (
    <svg viewBox="0 0 128 128" {...props}>
      <circle cx="64" cy="64" r="11" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="6" fill="none">
        <ellipse cx="64" cy="64" rx="50" ry="20" />
        <ellipse cx="64" cy="64" rx="20" ry="50" transform="rotate(60 64 64)" />
        <ellipse cx="64" cy="64" rx="20" ry="50" transform="rotate(120 64 64)" />
      </g>
    </svg>
  ),

  nextjs: (props: IconProps) => (
    <svg viewBox="0 0 128 128" {...props}>
      <circle cx="64" cy="64" r="64" fill="black" />
      <path
        fill="white"
        d="M38 40h12l22 34V40h10v48H70L48 54v34H38z"
      />
    </svg>
  ),

  tailwind: (props: IconProps) => (
    <svg viewBox="0 0 128 128" {...props}>
      <path
        fill="#38BDF8"
        d="M64 32c-17 0-28 8-34 24 6-8 13-11 22-9 5 1 9 4 13 7s9 7 16 7c17 0 28-8 34-24-6 8-13 11-22 9-5-1-9-4-13-7s-9-7-16-7z"
      />
    </svg>
  ),

  firebase: (props: IconProps) => (
    <svg viewBox="0 0 128 128" {...props}>
      <path fill="#FFA000" d="M26 96l38-64 38 64-38 22z" />
    </svg>
  ),

  framer: (props: IconProps) => (
    <svg viewBox="0 0 128 128" {...props}>
      <path fill="#0055FF" d="M32 24h64v32H64v24h32v24H32z" />
    </svg>
  ),

  prisma: (props: IconProps) => (
    <svg viewBox="0 0 128 128" {...props}>
      <path fill="#0C344B" d="M64 10l42 96-42 12-42-12z" />
    </svg>
  ),
    gitHub: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.57.11.78-.25.78-.55v-2.17c-3.2.7-3.87-1.38-3.87-1.38-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.27 5.69.41.36.78 1.07.78 2.15v3.18c0 .3.2.66.79.55A11.52 11.52 0 0 0 23.5 12.02C23.5 5.74 18.27.5 12 .5z"
      />
    </svg>
  ),

  vercel: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M12 2L2 22h20L12 2z" />
    </svg>
  ),

  figma: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path fill="#F24E1E" d="M12 12a4 4 0 1 1 4-4 4 4 0 0 1-4 4z" />
      <path fill="#A259FF" d="M12 2a4 4 0 1 1-4 4 4 4 0 0 1 4-4z" />
      <path fill="#1ABCFE" d="M12 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
      <path fill="#0ACF83" d="M8 12a4 4 0 0 1-4-4 4 4 0 0 1 4-4h4v8z" />
      <path fill="#FF7262" d="M8 20a4 4 0 0 1 0-8h4v8z" />
    </svg>
  ),

  vite: (props: IconProps) => (
    <svg viewBox="0 0 256 256" {...props}>
      <path
        fill="#646CFF"
        d="M208.6 37.1 128 192 47.4 37.1a4 4 0 0 1 5.5-5.4l75.1 48.6 75.1-48.6a4 4 0 0 1 5.5 5.4z"
      />
      <path
        fill="#FFCC24"
        d="M128 80 69.2 42.2 128 192l58.8-149.8z"
      />
    </svg>
  ),

};
