/**
 * Pip Themes — Grove & Bloom
 *
 * Two visual identities for Pip's interface.
 * Applied via CSS custom properties on a parent element so the entire
 * chat UI, avatar, and shell respond to a single data attribute.
 *
 * Usage (React):
 *   import { pipThemes } from './pip/themes'
 *   <div style={pipThemes.grove.cssVars}>...</div>
 *   <div style={pipThemes.bloom.cssVars}>...</div>
 *
 * Or with a data attribute + CSS:
 *   <div data-pip-theme="grove">...</div>
 *   <div data-pip-theme="bloom">...</div>
 *
 * ─── Grove (masculine · muted) ─────────────────────────────────────────────
 * Inspired by deep forest, worn leather, and quiet mornings.
 * Muted greens, slate blues, warm ochre. Never harsh.
 *
 * ─── Bloom (feminine · bright pastel) ──────────────────────────────────────
 * Inspired by wildflower meadows and warm afternoon light.
 * Blush rose, soft lavender, warm peach, bright mint. Never sharp.
 */

export const pipThemes = {

  // ──────────────────────────────────────────────────────────────────────────
  grove: {
    id: 'grove',
    label: 'Grove',
    tagline: 'Muted & grounded',
    description: 'Deep forest tones. Quiet and focused.',

    // Core palette — raw values for use outside CSS
    palette: {
      // Shells
      bg:           '#0e1812',   // Very dark forest green-black
      surface:      '#141f17',   // Dark forest surface
      surfaceRaised:'#1a2b1e',   // Slightly raised cards
      border:       '#253329',   // Muted olive border
      borderSubtle: '#1d2920',   // Very subtle border

      // Pip (AI) chat bubble
      pipBubbleBg:  '#1e3328',   // Dark forest green
      pipBubbleFg:  '#8fbf9a',   // Soft sage green text
      pipBubbleBorder: '#2e4d38',

      // User chat bubble
      userBubbleBg: '#172130',   // Deep muted slate-navy
      userBubbleFg: '#7da8c9',   // Dusty sky blue text
      userBubbleBorder: '#1f3045',

      // Pip avatar
      avatarBg:     '#1b2e22',
      avatarRing:   '#3d6b4a',
      avatarGlow:   'rgba(61,107,74,0.15)',
      avatarText:   '#7ab896',

      // Accent — warm ochre/amber
      accent:       '#c4862a',
      accentLight:  '#d99e4e',
      accentMuted:  '#7a531a',
      accentGlow:   'rgba(196,134,42,0.12)',

      // Text
      textPrimary:  '#d4e8da',   // Warm off-white with green tint
      textSecondary:'#7a9982',   // Muted sage
      textMuted:    '#4a6354',   // Very muted

      // Input
      inputBg:      '#141f17',
      inputBorder:  '#2a3d30',
      inputFocus:   '#3d6b4a',
      inputText:    '#d4e8da',
      inputPlaceholder: '#4a6354',

      // Session timer / status
      timerBg:      '#1a2b1e',
      timerFg:      '#7a9982',

      // Scrollbar
      scrollThumb:  '#2a3d30',
      scrollTrack:  '#0e1812',
    },

    // CSS custom properties (for inline style or :root injection)
    get cssVars() {
      return Object.fromEntries(
        Object.entries(this.palette).map(([k, v]) => [`--pip-${k}`, v])
      )
    },

    // Tailwind-compatible arbitrary value helpers (for JIT usage)
    tw: {
      bg:           'bg-[#0e1812]',
      surface:      'bg-[#141f17]',
      border:       'border-[#253329]',
      accent:       'text-[#c4862a]',
      accentBg:     'bg-[#c4862a]',
      accentHover:  'hover:bg-[#d99e4e]',
      textPrimary:  'text-[#d4e8da]',
      textSecondary:'text-[#7a9982]',
      pipBubble:    'bg-[#1e3328] text-[#8fbf9a] border-[#2e4d38]',
      userBubble:   'bg-[#172130] text-[#7da8c9] border-[#1f3045]',
      inputBg:      'bg-[#141f17] border-[#2a3d30] text-[#d4e8da]',
      avatarRing:   'border-[#3d6b4a]',
      avatarText:   'text-[#7ab896]',
    },
  },

  // ──────────────────────────────────────────────────────────────────────────
  bloom: {
    id: 'bloom',
    label: 'Bloom',
    tagline: 'Bright & warm',
    description: 'Soft pastels. Cheerful and open.',

    palette: {
      // Shells
      bg:           '#fdf8f5',   // Warm cream white
      surface:      '#fff4f7',   // Soft blush white
      surfaceRaised:'#ffffff',   // Pure white cards
      border:       '#f5d0dc',   // Soft rose border
      borderSubtle: '#fae8ee',   // Very subtle blush

      // Pip (AI) chat bubble
      pipBubbleBg:  '#f0eaff',   // Soft lavender
      pipBubbleFg:  '#6b4fa8',   // Deep lavender text
      pipBubbleBorder: '#d8c8f8',

      // User chat bubble
      userBubbleBg: '#fff3ed',   // Warm peach
      userBubbleFg: '#b8572a',   // Warm terracotta text
      userBubbleBorder: '#fcd8c0',

      // Pip avatar
      avatarBg:     '#f5e8ff',
      avatarRing:   '#c49ee8',
      avatarGlow:   'rgba(196,158,232,0.25)',
      avatarText:   '#8a5cc9',

      // Accent — warm rose
      accent:       '#e8567a',
      accentLight:  '#ef80a0',
      accentMuted:  '#f5c0cf',
      accentGlow:   'rgba(232,86,122,0.12)',

      // Text
      textPrimary:  '#3d2a35',   // Deep warm plum-brown
      textSecondary:'#8a5c70',   // Muted rose-mauve
      textMuted:    '#c4a0b0',   // Very muted blush

      // Input
      inputBg:      '#ffffff',
      inputBorder:  '#f5d0dc',
      inputFocus:   '#c49ee8',
      inputText:    '#3d2a35',
      inputPlaceholder: '#c4a0b0',

      // Session timer / status
      timerBg:      '#fae8ee',
      timerFg:      '#8a5c70',

      // Scrollbar
      scrollThumb:  '#f5c0cf',
      scrollTrack:  '#fdf8f5',
    },

    get cssVars() {
      return Object.fromEntries(
        Object.entries(this.palette).map(([k, v]) => [`--pip-${k}`, v])
      )
    },

    tw: {
      bg:           'bg-[#fdf8f5]',
      surface:      'bg-[#fff4f7]',
      border:       'border-[#f5d0dc]',
      accent:       'text-[#e8567a]',
      accentBg:     'bg-[#e8567a]',
      accentHover:  'hover:bg-[#ef80a0]',
      textPrimary:  'text-[#3d2a35]',
      textSecondary:'text-[#8a5c70]',
      pipBubble:    'bg-[#f0eaff] text-[#6b4fa8] border-[#d8c8f8]',
      userBubble:   'bg-[#fff3ed] text-[#b8572a] border-[#fcd8c0]',
      inputBg:      'bg-[#ffffff] border-[#f5d0dc] text-[#3d2a35]',
      avatarRing:   'border-[#c49ee8]',
      avatarText:   'text-[#8a5cc9]',
    },
  },
}

// Ordered for display (Grove first — appears on left)
export const pipThemeList = [pipThemes.grove, pipThemes.bloom]

// Helper: get theme by id
export function getPipTheme(id) {
  return pipThemes[id] ?? pipThemes.grove
}
