/**
 * Design tokens extracted from DESIGN.md.
 * All components MUST import from here. No inline hex codes.
 * If DESIGN.md changes, update this file first.
 */

export const tokens = {
  colors: {
    void: "#0A0A0A",
    surface: "#141414",
    elevated: "#1A1A1A",
    border: "#262626",
    accent: "#10B981",
    accentHover: "#059669",
    textPrimary: "#FAFAFA",
    textSecondary: "#A3A3A3",
    textMuted: "#737373",
    danger: "#EF4444",
    warning: "#F59E0B",
  },
  spacing: {
    sidebarWidth: 240,
    topBarHeight: 64,
    maxContentWidth: 1200,
    sectionPaddingDesktop: 80,
    sectionPaddingMobile: 48,
    cardPadding: 24,
    cardGap: 16,
  },
  typography: {
    heading: {
      weight: 700,
      letterSpacing: "-0.02em",
      lineHeight: 1.2,
    },
    body: {
      weight: 400,
      lineHeight: 1.6,
    },
    label: {
      weight: 500,
      size: 12,
      letterSpacing: "0.05em",
      uppercase: true,
    },
  },
  transitions: {
    fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
    medium: "200ms ease-out",
    slow: "250ms ease-out",
  },
} as const;

export type DesignTokens = typeof tokens;
