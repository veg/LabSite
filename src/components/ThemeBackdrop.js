'use client';
import { useTheme } from './ThemeContext';

/**
 * Theme-specific decorative backdrops mounted in the root layout so they
 * apply on every route (home, /projects, /members, /papers, /former).
 *
 * All backdrops are fixed, aria-hidden, pointer-events: none, and sit at
 * z-index -1 so they never interfere with content or interaction.
 *
 * Notes:
 *  - The base body background color is already set per-theme via
 *    `[data-theme='...']` CSS variables, so these are purely decorative.
 *  - Themes without a backdrop entry simply render nothing.
 */
export default function ThemeBackdrop() {
  const { theme, mounted } = useTheme();
  if (!mounted) return null;

  if (theme === 'win95') {
    // Solid teal "desktop" — body bg already #008080, but this guarantees
    // it renders even if Tailwind utilities try to paint over <main>.
    return (
      <div
        aria-hidden="true"
        style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none', backgroundColor: '#008080' }}
      />
    );
  }

  if (theme === 'notebook') {
    return (
      <div aria-hidden="true" style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none', overflow: 'hidden' }}>
        {/*
          Lined notebook paper:
          - Cream background.
          - Horizontal blue rule every 28px (matches CSS line-height).
          - Vertical red margin 64px from the left edge.
        */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#f8f1d8',
            backgroundImage: [
              'repeating-linear-gradient(0deg, transparent 0px, transparent 27px, #aac4e8 27px, #aac4e8 28px)',
              'linear-gradient(90deg, transparent 63px, #c93030 63px, #c93030 65px, transparent 65px)',
            ].join(','),
          }}
        />
        {/*
          Coffee ring — SVG-based for crisp edges and variable width.
          Uses multiple overlapping arcs at different stroke-widths and
          dash offsets to mimic the uneven deposit a real coffee cup leaves:
          thick on one side, thin or absent on the other.
        */}
        <svg
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '8%',
            right: '4%',
            width: '420px',
            height: '420px',
            transform: 'rotate(-11deg)',
            overflow: 'visible',
          }}
          viewBox="0 0 200 200"
        >
          {/*
            All arcs share the same cx/cy/r so they sit on the same circle.
            Circumference ≈ 2π×88 ≈ 553px (in viewBox units).
            Each arc is a dash segment: dasharray="length gap" offset="start".
            Varying stroke-width gives the organic uneven-deposit look.
          */}
          {/* Thin complete base ring — goes all the way around */}
          <circle cx="100" cy="100" r="88"
            fill="none"
            stroke="rgba(101,57,18,0.28)"
            strokeWidth="1.5"
          />
          {/* Heavy arc — bottom-left, thickest deposit */}
          <circle cx="100" cy="100" r="88"
            fill="none"
            stroke="rgba(101,57,18,0.72)"
            strokeWidth="7"
            strokeDasharray="180 373"
            strokeDashoffset="-60"
            strokeLinecap="round"
          />
          {/* Medium arc — right side */}
          <circle cx="100" cy="100" r="88"
            fill="none"
            stroke="rgba(101,57,18,0.58)"
            strokeWidth="4"
            strokeDasharray="110 443"
            strokeDashoffset="-270"
            strokeLinecap="round"
          />
          {/* Thin wispy arc — top, almost absent */}
          <circle cx="100" cy="100" r="88"
            fill="none"
            stroke="rgba(101,57,18,0.32)"
            strokeWidth="2"
            strokeDasharray="60 493"
            strokeDashoffset="-410"
            strokeLinecap="round"
          />
          {/* Small gap-filler blob on lower-right edge */}
          <circle cx="100" cy="100" r="88"
            fill="none"
            stroke="rgba(120,70,25,0.50)"
            strokeWidth="5"
            strokeDasharray="30 523"
            strokeDashoffset="-240"
            strokeLinecap="round"
          />
          {/* Drip — a small teardrop hanging off the bottom of the ring */}
          <ellipse cx="72" cy="196" rx="4" ry="7"
            fill="rgba(101,57,18,0.38)"
          />
          {/* Tiny detached droplet */}
          <circle cx="62" cy="207" r="2.5"
            fill="rgba(101,57,18,0.28)"
          />
        </svg>
      </div>
    );
  }

  if (theme === 'manuscript') {
    return (
      <div aria-hidden="true" style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: '#f5f1e8' }} />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(-30deg)',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontSize: '180px',
            fontWeight: 'bold',
            color: '#003366',
            opacity: 0.04,
            letterSpacing: '0.2em',
            whiteSpace: 'nowrap',
          }}
        >
          PREPRINT
        </div>
      </div>
    );
  }

  return null;
}
