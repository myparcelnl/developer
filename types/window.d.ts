type DataLayer = unknown[];

declare global {
  interface Window {
    dataLayer?: DataLayer;
  }
}

export {};
