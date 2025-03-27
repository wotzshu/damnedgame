import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="damnedgame.jpg" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="ChronoRift features a massive, fully explorable open world that expands not only horizontally but also temporally. Players can explore different time periods of the same location, where a ruined site in one era might have been a majestic empire in the past."
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@Damned" />
          <meta name="twitter:creator" content="@Damned" />
          <meta property="og:url" content="https://damnedgame.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Damned" />
          <link
            rel="icon"
            href="damnedgame.jpg"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="ChronoRift features a massive, fully explorable open world that expands not only horizontally but also temporally. Players can explore different time periods of the same location, where a ruined site in one era might have been a majestic empire in the past."
          />
          <meta property="og:image" content="damnedgame.png" />
          <meta property="og:image:alt" content="Damned" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="ChronoRift"
          />
          <meta name="theme-color" content="#087ddd" />
          <link rel="icon" href="damnedgame.jpg" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
