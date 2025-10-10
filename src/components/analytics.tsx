"use client";

import Script from "next/script";
import { env } from "@/lib/env";

export function Analytics() {
  if (env.ANALYTICS_PROVIDER === "plausible" && env.PLAUSIBLE_DOMAIN) {
    return (
      <Script
        defer
        data-domain={env.PLAUSIBLE_DOMAIN}
        src="https://plausible.io/js/script.js"
      />
    );
  }

  if (env.ANALYTICS_PROVIDER === "gtag" && env.GTAG_ID) {
    return (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${env.GTAG_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${env.GTAG_ID}');
          `}
        </Script>
      </>
    );
  }

  return null;
}
