# Design System — Void Dark

## Color Palette
- Void: #0A0A0A (page background)
- Surface: #141414 (cards, sidebar, inputs)
- Elevated: #1A1A1A (hover states, modals)
- Border: #262626 (dividers, card borders)
- Accent: #10B981 (primary actions, status online, links)
- AccentHover: #059669 (button hover)
- TextPrimary: #FAFAFA (headings, important text)
- TextSecondary: #A3A3A3 (body, descriptions)
- TextMuted: #737373 (timestamps, placeholders)
- Danger: #EF4444 (errors, offline status)
- Warning: #F59E0B (warnings)

## Typography
- Font family: Inter (Google Fonts), system-ui fallback.
- Headings: 700 weight, letter-spacing -0.02em, line-height 1.2.
- Body: 400 weight, line-height 1.6.
- Small/Label: 500 weight, 12px, uppercase, letter-spacing 0.05em.
- Mono: JetBrains Mono for code/costs/logs.

## Spacing
- Base unit: 4px.
- Section padding: 80px vertical on desktop, 48px on mobile.
- Card padding: 24px.
- Gap between cards: 16px.
- Sidebar width: 240px (desktop), 100% overlay (mobile).
- Max content width: 1200px centered.

## Components

### Button
- Primary: bg Accent, text Void, rounded-full, px-6 py-2.5, font-500.
- Hover: bg AccentHover, scale(1.02), transition 150ms.
- Ghost: bg transparent, border Border, text TextPrimary. Hover bg Elevated.

### Card
- bg Surface, border 1px solid Border, rounded-xl.
- Hover: border color transitions to rgba(16, 185, 129, 0.3).

### Input
- bg Surface, border none, rounded-lg, px-4 py-3.
- Focus: ring-2 ring Accent, outline none.
- Placeholder: TextMuted.

### Sidebar
- bg Void, border-r Border, width 240px.
- Link: flex row, gap-3, px-4 py-3, rounded-lg, text TextSecondary.
- Active link: bg Elevated, text TextPrimary, left border 2px Accent.
- Logo area: px-4 py-6, border-b Border.

### Top Bar
- bg Surface/80 backdrop-blur, border-b Border, height 64px.
- Sticky top-0 z-50.

### Badge
- Online: bg Accent/10, text Accent, border Accent/20.
- Offline: bg TextMuted/10, text TextMuted, border TextMuted/20.
- Erro: bg Danger/10, text Danger, border Danger/20.
- Font: 12px, medium, rounded-full, px-2 py-0.5.

## Layout Patterns

### Marketing Page
- Top: minimal nav (logo + GitHub link), height 64px.
- Hero: centered, max-width 720px, pt-32 pb-20.
  - H1: 48px/56px bold, TextPrimary.
  - Subtitle: 20px/28px, TextSecondary, max-w 600px.
  - CTA: primary button, mt-8.
- Features: 3-column grid (1 on mobile), gap-6, max-w 1200px.
- Footer: py-12, border-t Border, text TextMuted center.

### Dashboard Shell
- Layout: flex row, height 100vh, overflow-hidden.
- Sidebar: fixed 240px, scrollable if needed.
- Main: flex-1, overflow-y-auto, bg Void.
- Top bar: inside main, sticky.
- Content padding: p-6 (desktop), p-4 (mobile).

## Animations
- Page transition: fade 200ms ease-out.
- Button hover: 150ms cubic-bezier(0.4, 0, 0.2, 1).
- Card hover: border-color 200ms, shadow glow Accent/5.
- Sidebar mobile: slide-in 250ms from left.
- Skeleton pulse: bg Elevated animate-pulse.
