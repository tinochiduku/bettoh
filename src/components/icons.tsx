import type { SVGProps } from "react";
import type React from "react";

/*
  Small, consistent 1.5px stroke icon set, hand-drawn for Bettohtech's six
  services. Kept dependency-free (no lucide/heroicons install required) so
  these pages work in any shell as-is.
*/

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function VehicleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 28l3-10a4 4 0 0 1 3.8-2.7h18.4A4 4 0 0 1 35 18l3 10" />
      <rect x="4" y="28" width="40" height="9" rx="2" />
      <circle cx="14" cy="37" r="3.2" />
      <circle cx="34" cy="37" r="3.2" />
      <path d="M11 22h26" />
    </svg>
  );
}

export function SignageIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 14l6-6h20l6 6v18H8z" />
      <path d="M17 26v-8l4 8v-8" />
      <path d="M25 18h5M25 22h4M25 26h5" />
      <path d="M24 32v8M17 40h14" />
    </svg>
  );
}

export function EventsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M24 6l4 8-8 0z" />
      <path d="M10 40l4-20a10 10 0 0 1 20 0l4 20z" />
      <path d="M14 30h20M12 40h24" />
    </svg>
  );
}

export function ReceptionIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 40V16l14-8 14 8v24" />
      <path d="M6 40h32" />
      <rect x="18" y="24" width="12" height="16" />
      <path d="M12 22h4v4h-4zM28 22h4v4h-4z" />
    </svg>
  );
}

export function PylonIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M18 4h8l4 6v30h-16V10z" />
      <path d="M14 40h20M17 40v4M31 40v4" />
      <path d="M18 18h12M18 24h12M18 30h9" />
    </svg>
  );
}

export function StationIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 12h18v28H6z" />
      <path d="M6 12l4-6h10l4 6" />
      <path d="M28 40V20l6-4h2a4 4 0 0 1 4 4v14a2.5 2.5 0 0 1-5 0v-6h-3" />
      <path d="M11 20h8M11 26h8" />
    </svg>
  );
}

export const serviceIcons: Record<string, React.ComponentType<IconProps>> = {
  "vehicle-branding": VehicleIcon,
  "3d-2d-signage": SignageIcon,
  "events-branding": EventsIcon,
  "reception-designs": ReceptionIcon,
  "pylons-fabrication": PylonIcon,
  "service-station-branding": StationIcon,
};

export function BoltIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13 2 3 14h6l-2 8 12-14h-7l1-6z" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
