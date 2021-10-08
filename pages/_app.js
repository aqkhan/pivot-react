import "../css/index.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <div className="bg-gray-50 h-screen">
            <Head>
                <title>Pivot Template</title>
                <meta />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
            </Head>

            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
