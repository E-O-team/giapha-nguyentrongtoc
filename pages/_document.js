import  Document,
        { Head, Main, NextScript }  from 'next/document';
import flush                        from 'styled-jsx/server';

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const { html, head, errorHtml, chunks } = renderPage();
        const styles = flush();
        return { html, head, errorHtml, chunks, styles };
    }

    render() {
        return (
            <html lang="en-US">
                <Head>
                    <meta name      = 'viewport'        content = 'width=device-width, initial-scale=1.0' />
                    <meta charSet   = "utf-8"/>
                    <meta name      = "viewport"        content = "width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <link rel       = "shortcut icon"   href = "/static/common/images/favicon.png" type="image/x-icon" />
                    <link rel       = "icon"            href = "/static/common/images/favicon.png" type="image/x-icon" />
                    <link rel       = "stylesheet"      href = "https://unpkg.com/react-table@latest/react-table.css"/>
                    <link rel       = "stylesheet"      href = "/static/common/css/bootstrap.min.css" />
                    <link rel       = "stylesheet"      href = "/static/common/css/font-awesome.min.css" />
                    <link rel       = "stylesheet"      href = "/static/common/css/owl.carousel.min.css" />
                    <link rel       = "stylesheet"      href = "/static/common/css/slimmenu.min.css" />
                    <link rel       = "stylesheet"      href = "/static/common/css/modal-video.min.css" />
                    <link rel       = "stylesheet"      href = "/static/common/css/animate.min.css" />
                    <link rel       = "stylesheet"      href = "/static/common/css/styles.css" />
                    <link rel       = "stylesheet"      href = "/static/common/css/responsive.css" />
                    <link rel       = "stylesheet"      href = "https://fonts.googleapis.com/css?family=Roboto:400,500,700"></link>
                
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <script src = "/static/common/js/jquery-3.2.1.min.js"></script>
                <script src = "https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
                <script src = "/static/common/js/popper.min.js"></script>
                <script src = "/static/common/js/bootstrap.min.js"></script>
                <script src = "/static/common/js/owl.carousel.min.js"></script>
                <script src = "/static/common/js/jquery-modal-video.min.js"></script>
                <script src = "/static/common/js/isotope.pkgd.min.js"></script>
                <script src = "/static/common/js/jquery.slimmenu.min.js"></script>
                <script src = "/static/common/js/wow.min.js"></script>
                <script src = "/static/common/js/custom.js"></script>
            </html>
        )
    }
}
