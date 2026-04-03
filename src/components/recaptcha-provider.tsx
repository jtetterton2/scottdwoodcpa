"use client";

import Script from "next/script";
import { createContext, useContext, useCallback } from "react";

const RecaptchaContext = createContext<{
  executeRecaptcha: ((action: string) => Promise<string>) | null;
}>({ executeRecaptcha: null });

export function useRecaptcha() {
  return useContext(RecaptchaContext);
}

export function RecaptchaProvider({ children }: { children: React.ReactNode }) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const executeRecaptcha = useCallback(
    (action: string): Promise<string> => {
      return new Promise((resolve, reject) => {
        const grecaptcha = (window as unknown as { grecaptcha?: { ready: (cb: () => void) => void; execute: (key: string, opts: { action: string }) => Promise<string> } }).grecaptcha;
        if (!grecaptcha || !siteKey) {
          reject(new Error("reCAPTCHA not loaded"));
          return;
        }
        grecaptcha.ready(() => {
          grecaptcha
            .execute(siteKey, { action })
            .then(resolve)
            .catch(reject);
        });
      });
    },
    [siteKey]
  );

  if (!siteKey) {
    return <>{children}</>;
  }

  return (
    <RecaptchaContext.Provider value={{ executeRecaptcha }}>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
        strategy="afterInteractive"
      />
      {children}
    </RecaptchaContext.Provider>
  );
}
