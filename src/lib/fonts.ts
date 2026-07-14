import { Big_Shoulders, IBM_Plex_Sans, IBM_Plex_Mono, Kalam } from "next/font/google";

// Display face — condensed, heavy, industrial. Carries the "fabrication /
// structural steel" personality of the brand (name literally reads
// "big shoulders"). Used for headlines only, always uppercase.
export const fontDisplay = Big_Shoulders({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

// Body face — clean technical grotesk, pairs the "tech" half of the brand.
export const fontBody = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

// Utility / mono face — for eyebrows, specs, labels. Reads like a spec sheet.
export const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

// Script face — reserved ONLY for the "Brand Architects" signature line,
// echoing the hand-painted script on the physical logo.
export const fontScript = Kalam({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-script",
  display: "swap",
});

// Combine into one className string to drop on any top-level page wrapper.
export const fontVariables = `${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable} ${fontScript.variable}`;
