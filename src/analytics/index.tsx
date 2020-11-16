/// <reference types="@types/segment-analytics" />
// https://medium.com/@ashokraju/using-segment-io-analytics-js-with-single-page-react-typescript-app-a8c12b4816c4
import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";

declare global {
  interface Window {
    analytics: SegmentAnalytics.AnalyticsJS;
  }
}

const SegmentKey = "Nn6paQ8nDMLPJDJp1gGGq9Xf1NdDxnyB";

export const page = () => window.analytics.page();

export const track = (name: string, properties: any) => {
  window.analytics.track(name, properties);
  console.log("tracking", name, "with", JSON.stringify(properties));
};

export const AnalyticsScriptTag = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
            var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="4.0.0";
                analytics.load("${SegmentKey}");analytics.page();}
        `,
    }}
  />
);

export const AnalyticsWrapper: FC = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      page();
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return <>{children}</>;
};
