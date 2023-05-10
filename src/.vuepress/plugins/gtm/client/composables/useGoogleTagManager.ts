interface UseGoogleTagManager {
  sendEvent(event: string, data: Record<string, unknown>): void;
}

export const useGoogleTagManager = (): UseGoogleTagManager => {
  return {
    sendEvent: (event, data) => {
      window.dataLayer?.push({event, ...data});
    },
  };
};
