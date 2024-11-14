import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta property="og:title" content="Meta Tag Site" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://r2.wakttu.kr/og-image.png" />
      <meta property="og:description" content="Meta Tag Site description" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Meta Tag Site" />
      <meta name="twitter:image" content="https://r2.wakttu.kr/og-image.png" />
      <meta name="twitter:description" content="summary_large_image" />

      <title>Meta Tag</title>

      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
