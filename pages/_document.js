import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?
                family=Manrope&family=Sarabun:wght@500&family=Jost:wght@500&family=Assistant:wght@400;500&family=Hanken+Grotesk:wght@500
                family=Open+Sans&
                &display=swap" rel="stylesheet" />
                <link href="https://fonts.cdnfonts.com/css/sf-pro-display" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument 

