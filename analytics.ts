// Add global type declaration for window.gtag
declare global {
  interface Window {
    gtag: (type: 'event', eventName: string, eventParams: Record<string, any>) => void;
  }
}

/**
 * Tracks a download button click event using Google Analytics.
 * @param {string} source - The identifier for the download source (e.g., 'header', 'cta_section').
 */
export const trackDownloadClick = (source: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'download', {
      'event_category': 'engagement',
      'event_label': source
    });
  }
};
