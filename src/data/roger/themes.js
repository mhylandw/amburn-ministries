/**
 * Roger Themes — Stone & Dawn
 *
 * Two visual identities for Roger's interface.
 * Mirrors the Pip themes architecture.
 *
 * ─── Stone (grounded · dark) ────────────────────────────────────────────────
 * Inspired by the Discern app's existing coal palette.
 * Deep charcoal, warm flame orange, muted slate. Steady and serious.
 *
 * ─── Dawn (luminous · warm) ─────────────────────────────────────────────────
 * Inspired by early morning light and quiet expectation.
 * Warm cream, amber gold, soft rose. Open and receiving.
 */

export const rogerThemes = {

  // ──────────────────────────────────────────────────────────────────────────
  stone: {
    id: 'stone',
    label: 'Stone',
    tagline: 'Grounded & quiet',
    description: 'Deep charcoal tones. Steady and serious.',

    palette: {
      // Shells
      bg:            '#0f1410',
      surface:       '#161d17',
      surfaceRaised: '#1c2620',
      border:        '#252f26',
      borderSubtle:  '#1c2420',

      // Roger (AI) chat bubble
      rogerBubbleBg:     '#1a2a1c',
      rogerBubbleFg:     '#a0c4a8',
      rogerBubbleBorder: '#2a422d',

      // User chat bubble
      userBubbleBg:      '#1e1e2e',
      userBubbleFg:      '#9aaccf',
      userBubbleBorder:  '#252540',

      // Roger avatar
      avatarBg:    '#182018',
      avatarRing:  '#c4742a',
      avatarGlow:  'rgba(196,116,42,0.15)',
      avatarText:  '#e89450',

      // Accent — flame/amber (matches Discern brand)
      accent:      '#e07030',
      accentLight: '#e88a4e',
      accentMuted: '#8a4818',
      accentGlow:  'rgba(224,112,48,0.12)',

      // Text
      textPrimary:   '#dce8de',
      textSecondary: '#7a9880',
      textMuted:     '#4a6050',

      // Input
      inputBg:          '#161d17',
      inputBorder:      '#283029',
      inputFocus:       '#c4742a',
      inputText:        '#dce8de',
      inputPlaceholder: '#4a6050',

      // Session / status
      timerBg: '#1c2620',
      timerFg: '#7a9880',

      // Scrollbar
      scrollThumb: '#283029',
      scrollTrack: '#0f1410',
    },

    get cssVars() {
      return Object.fromEntries(
        Object.entries(this.palette).map(([k, v]) => [`--roger-${k}`, v])
      )
    },

    tw: {
      bg:           'bg-[#0f1410]',
      surface:      'bg-[#161d17]',
      border:       'border-[#252f26]',
      accent:       'text-[#e07030]',
      accentBg:     'bg-[#e07030]',
      accentHover:  'hover:bg-[#e88a4e]',
      textPrimary:  'text-[#dce8de]',
      textSecondary:'text-[#7a9880]',
      rogerBubble:  'bg-[#1a2a1c] text-[#a0c4a8] border-[#2a422d]',
      userBubble:   'bg-[#1e1e2e] text-[#9aaccf] border-[#252540]',
      inputBg:      'bg-[#161d17] border-[#283029] text-[#dce8de]',
      avatarRing:   'border-[#c4742a]',
      avatarText:   'text-[#e89450]',
    },
  },

  // ──────────────────────────────────────────────────────────────────────────
  dawn: {
    id: 'dawn',
    label: 'Dawn',
    tagline: 'Luminous & open',
    description: 'Warm morning light. Expectant and open.',

    palette: {
      // Shells
      bg:            '#faf7f2',
      surface:       '#fff8f0',
      surfaceRaised: '#ffffff',
      border:        '#f0ddc8',
      borderSubtle:  '#f8ede0',

      // Roger (AI) chat bubble
      rogerBubbleBg:     '#fff8ee',
      rogerBubbleFg:     '#7a4f20',
      rogerBubbleBorder: '#f0d8b8',

      // User chat bubble
      userBubbleBg:      '#f0f4ff',
      userBubbleFg:      '#3a4f88',
      userBubbleBorder:  '#d8e0f8',

      // Roger avatar
      avatarBg:    '#fff0e0',
      avatarRing:  '#d08030',
      avatarGlow:  'rgba(208,128,48,0.2)',
      avatarText:  '#b06820',

      // Accent — warm amber/gold
      accent:      '#c87020',
      accentLight: '#d88838',
      accentMuted: '#f0d8b0',
      accentGlow:  'rgba(200,112,32,0.12)',

      // Text
      textPrimary:   '#2c2018',
      textSecondary: '#7a5838',
      textMuted:     '#c0a080',

      // Input
      inputBg:          '#ffffff',
      inputBorder:      '#f0ddc8',
      inputFocus:       '#d08030',
      inputText:        '#2c2018',
      inputPlaceholder: '#c0a080',

      // Session / status
      timerBg: '#fff0e0',
      timerFg: '#7a5838',

      // Scrollbar
      scrollThumb: '#f0d8b8',
      scrollTrack: '#faf7f2',
    },

    get cssVars() {
      return Object.fromEntries(
        Object.entries(this.palette).map(([k, v]) => [`--roger-${k}`, v])
      )
    },

    tw: {
      bg:           'bg-[#faf7f2]',
      surface:      'bg-[#fff8f0]',
      border:       'border-[#f0ddc8]',
      accent:       'text-[#c87020]',
      accentBg:     'bg-[#c87020]',
      accentHover:  'hover:bg-[#d88838]',
      textPrimary:  'text-[#2c2018]',
      textSecondary:'text-[#7a5838]',
      rogerBubble:  'bg-[#fff8ee] text-[#7a4f20] border-[#f0d8b8]',
      userBubble:   'bg-[#f0f4ff] text-[#3a4f88] border-[#d8e0f8]',
      inputBg:      'bg-[#ffffff] border-[#f0ddc8] text-[#2c2018]',
      avatarRing:   'border-[#d08030]',
      avatarText:   'text-[#b06820]',
    },
  },
}

export const rogerThemeList = [rogerThemes.stone, rogerThemes.dawn]

export function getRogerTheme(id) {
  return rogerThemes[id] ?? rogerThemes.stone
}
