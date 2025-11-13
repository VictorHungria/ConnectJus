import { useState } from 'react';

// Add global type declaration for window.gtag
declare global {
  interface Window {
    gtag: (type: 'event', eventName: string, eventParams: Record<string, any>) => void;
  }
}

const trackDownloadClick = (source: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'download', {
      'event_category': 'engagement',
      'event_label': source
    });
  }
};

type DownloadState = 'idle' | 'loading' | 'error';

export const useDownload = () => {
  const [downloadState, setDownloadState] = useState<DownloadState>('idle');

  const handleDownload = async (source: string) => {
    if (downloadState === 'loading') return;
    setDownloadState('loading');
    trackDownloadClick(source);

    try {
      const response = await fetch('https://api.github.com/repos/VictorHungria/ConnectJus/releases/latest');
      if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      const exeAsset = data.assets.find((asset: any) => asset.name.endsWith('.exe'));
      
      if (exeAsset?.browser_download_url) {
        window.location.href = exeAsset.browser_download_url;
        // Failsafe in case of pop-up blockers or navigation issues
        setTimeout(() => setDownloadState('idle'), 5000);
      } else {
        console.error('No .exe asset found in the latest release.');
        setDownloadState('error');
      }
    } catch (error) {
      console.error('Failed to get latest release download link:', error);
      setDownloadState('error');
    }
  };

  const handleFallback = () => {
      window.location.href = 'https://github.com/VictorHungria/ConnectJus/releases';
  };

  return { downloadState, handleDownload, handleFallback };
};