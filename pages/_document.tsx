import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta property="og:title" content="Meta Tag Site" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://r2.wakttu.kr/og-image.png" />
      <meta property="og:description" content="Meta Tag Site description" />

      <title>Meta Tag</title>

      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
