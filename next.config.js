// NEXT BUNDLE ANALYZER
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.NEXT_PUBLIC_ANALYZE === "TRUE",
});

// WRAPPIGN WITH BUNDLE ANALYZER
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    domains: [
      "storage.googleapis.com",
      "course-webview.staging.classplus.co",
      "cp-assets-web.s3.ap-south-1.amazonaws.com",
      "dtxqtzf8mpl38.cloudfront.net",
      "d21qmqg3g5bkb7.cloudfront.net",
      "res.cloudinary.com",
      "whitelabel-assets.s3.ap-south-1.amazonaws.com",
    ],
  },
  experimental: {
    removeConsole: false,
  },
  env: {
    development: {
      plugins: [
        [
          "@emotion",
          {
            sourceMap: true,
            autoLabel: "always",
            labelFormat: "[local]--[filename]",
            cssPropOptimization: false,
          },
        ],
      ],
      presets: [
        [
          "next/babel",
          {
            "preset-react": {
              importSource: "@welldone-software/why-did-you-render",
            },
          },
        ],
      ],
    },
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/1600/1",
        permanent: true,
      },
    ];
  },
});
