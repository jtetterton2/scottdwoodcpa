"use client";

import Script from "next/script";
import { createContext, useContext, useCallback, useState } from "react";

const RecaptchaContext = createContext<{
  executeRecaptcha: ((action: string) => Promise<string>) | null;
  ready: boolean;
}>({ executeRecaptcha: null, ready: false });

export function useRecaptcha() {
  return useContext(RecaptchaContext);
}

export function RecaptchaProvider({ children }: { children: React.ReactNode }) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const executeRecaptcha = useCallback(
    (action: string): Promise<string> => {
      return new Promise((resolve, reject) => {
        // 5 second timeout so form doesn't hang
        const timeout = setTimeout(() => {
          reject(new Error("reCAPTCHA timed out"));
        }, 5000);

        const w = window as unknown as {
          grecaptcha?: {
            ready: (cb: () => void) => void;
            execute: (
              key: string,
              opts: { action: string }
            ) => Promise<string>;
          };
        };

        if (!w.grecaptcha || !siteKey) {
          clearTimeout(timeout);
          reject(new Error("reCAPTCHA not loaded"));
          return;
        }

        w.grecaptcha.ready(() => {
          w.grecaptcha!
            .execute(siteKey, { action })
            .then((token) => {
              clearTimeout(timeout);
              resolve(token);
            })
            .catch((err) => {
              clearTimeout(timeout);
              reject(err);
            });
        });
      });
    },
    [siteKey]
  );

  if (!siteKey) {
    return <>{children}</>;
  }

  return (
    <RecaptchaContext.Provider
      value={{ executeRecaptcha: scriptLoaded ? executeRecaptcha : null, ready: scriptLoaded }}
    >
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
        onError={() => setScriptLoaded(true)}
      />
      {children}
    </RecaptchaContext.Provider>
  );
}
