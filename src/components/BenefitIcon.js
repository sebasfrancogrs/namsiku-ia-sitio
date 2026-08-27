const PATHS = {
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  shield: (
    <path
      d="M12 3.5 19 6v5.5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-2.5Z"
      strokeLinejoin="round"
    />
  ),
  layers: (
    <>
      <path d="M12 3.8 20 8l-8 4.2L4 8l8-4.2Z" strokeLinejoin="round" />
      <path d="M4 12.2 12 16.4l8-4.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 16.2 12 20.4l8-4.2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  trendingUp: (
    <>
      <path d="M4 16.5 10 10l4 4 6-7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 6.5h5v5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

export default function BenefitIcon({ name, className = "h-5 w-5" }) {
  const path = PATHS[name] ?? PATHS.target;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}
