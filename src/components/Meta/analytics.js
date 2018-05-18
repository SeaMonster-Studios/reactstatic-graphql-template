/* globals document window dataLayer */
if (typeof document !== 'undefined') {
  window.dataLayer = window.dataLayer || []
  function gtag() {
    dataLayer.push(arguments)
  }
  gtag('js', new Date())

  gtag('config', process.env.GOOGLE_ANALYTICS_TAG)
}
