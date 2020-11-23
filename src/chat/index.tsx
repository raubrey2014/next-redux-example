/// <reference types="@types/intercom-web" />
import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";

const INTERCOM_APP_ID = "bd0vi493";

const ChatScriptTag = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `(function () {
      var w = window;
      var ic = w.Intercom;
      if (typeof ic === "function") {
        ic("reattach_activator");
        ic("update", w.intercomSettings);
      } else {
        var d = document;
        var i = function () {
          i.c(arguments);
        };
        i.q = [];
        i.c = function (args) {
          i.q.push(args);
        };
        w.Intercom = i;
        var l = function () {
          var s = d.createElement("script");
          s.type = "text/javascript";
          s.async = true;
          s.src = "https://widget.intercom.io/widget/${INTERCOM_APP_ID}";
          var x = d.getElementsByTagName("script")[0];
          x.parentNode.insertBefore(s, x);
        };
        if (w.attachEvent) {
          w.attachEvent("onload", l);
        } else {
          w.addEventListener("load", l, false);
        }
      }
    })()`,
    }}
  />
);

const update = () =>
  window.Intercom("update", {
    app_id: INTERCOM_APP_ID,
    // Example user identification...
    // name: "Jane Doe", // Full name
    // email: "jane@doe.com", // Email address
    // created_at: "1606050849", // Signup date as a Unix timestamp
  });

const ChatWrapper: FC = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    window.Intercom("boot", {
      app_id: INTERCOM_APP_ID,
    });

    router.events.on("routeChangeComplete", update);

    return () => router.events.off("routeChangeComplete", update);
  }, []);

  return <>{children}</>;
};

export { ChatScriptTag, ChatWrapper };
