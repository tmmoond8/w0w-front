declare global {
  interface Window {
    gtag: (param1: string, param2: string, param3: object) => void;
  }
}

const gaTrackId = 'G-2V7C7VZQ6C';

const pageView = (url: string) => {
  window.gtag('config', gaTrackId, {
    page_path: url,
  });
};

const sendEvent = (eventName: string, value: Record<string, any>) => {
  window.gtag('event', eventName, value);
};

export default {
  pageView,
  sendEvent,
};
