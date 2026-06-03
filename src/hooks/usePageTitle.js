import { useEffect } from 'react'

/**
 * Sets the browser tab title and updates OG meta tags for JS-aware crawlers.
 * @param {string} title - Full page title, e.g. "About | Amburn Ministries"
 * @param {string} [description] - Optional page-specific meta description
 */
export function usePageTitle(title, description) {
  useEffect(() => {
    document.title = title

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', title)

    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) twitterTitle.setAttribute('content', title)

    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) metaDesc.setAttribute('content', description)

      const ogDesc = document.querySelector('meta[property="og:description"]')
      if (ogDesc) ogDesc.setAttribute('content', description)

      const twitterDesc = document.querySelector('meta[name="twitter:description"]')
      if (twitterDesc) twitterDesc.setAttribute('content', description)
    }

    return () => {
      document.title = 'Amburn Ministries — Heal · Deliver · Restore'
    }
  }, [title, description])
}
