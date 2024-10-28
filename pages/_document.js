import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en" className="scroll-smooth">
            <Head />
            <body>
                <Main />
                <NextScript />
                <Script
                    src="https://static.elfsight.com/platform/platform.js"
                    onLoad={() => {
                        console.log("ssup");
                    }}
                    onError={() => {
                        console.log("sserrorup");
                    }}
                    strategy="lazyOnload"
                />
            </body>
        </Html>
    );
}
