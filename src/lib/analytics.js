// ─── Conversion tracking (Google Ads + GA4) ────────────────────────────────────
//
// One place to fire conversions so every call stays consistent and correct.
//
// Google Ads conversions REQUIRE a per-action conversion label — the part after
// the slash in `AW-17236573986/LABEL`. Find it in:
//   Google Ads → Tools → Conversions → (your conversion action) → "Use Google tag"
//
// Paste the label(s) below. If you have a single conversion action, put the same
// label in each field. If you made separate actions (Lead / Download / App /
// Donate), give each its own. Until a real label is set, the Google Ads
// conversion is SKIPPED (so we never fire the broken label-less event that was
// here before) — but the GA4 analytics event still fires, so reporting works now.

const GOOGLE_ADS_ID = 'AW-17236573986'
const GA4_ID = 'G-PQNLDNPHG7'

const CONVERSION_LABELS = {
  lead: 'sn2VCKP6pLscEKL-hJtA',      // "Website Lead (forms & signups)"
  download: 'AKlsCLSRt7scEKL-hJtA',  // "eBook / Song Download"
  app: 'fnUtCLeRt7scEKL-hJtA',       // "App Store click (iOS)"
  donate: 'nFl8CLqRt7scEKL-hJtA',    // "Donation (PayPal)"
}

// GA4 event name per type (analytics — fires regardless of whether a label is set).
const GA4_EVENT = {
  lead: 'generate_lead',
  download: 'file_download',
  app: 'app_store_click',
  donate: 'donate',
}

/**
 * Fire a conversion.
 * @param {'lead'|'download'|'app'|'donate'} type
 * @param {object} [params] extra params (e.g. { value: 25, currency: 'USD' }, { item: 'Overcomer' })
 */
export function trackConversion(type, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return

  // 1) Google Ads conversion — only when a real label is configured.
  const label = CONVERSION_LABELS[type]
  if (label) {
    window.gtag('event', 'conversion', { send_to: `${GOOGLE_ADS_ID}/${label}`, ...params })
  }

  // 2) GA4 analytics event — always, so you get reporting even before labels exist.
  window.gtag('event', GA4_EVENT[type] || 'conversion', { send_to: GA4_ID, ...params })
}
