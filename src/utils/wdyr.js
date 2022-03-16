import React from "react";

if (process.env.NEXT_PUBLIC_ENV === "STAGING") {
  if (typeof window !== "undefined") {
    const whyDidYouRender = require("@welldone-software/why-did-you-render");
    whyDidYouRender(React, {
      trackAllPureComponents: true,
    });
  }
}
