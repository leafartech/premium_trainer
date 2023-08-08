import { Html, Head, Main, NextScript } from "next/document"

const Document = () => {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Italiana&display=swap" rel="stylesheet" />
      </Head>
      <body className="bg-brandBlack flex flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document