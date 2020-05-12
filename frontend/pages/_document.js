import React from 'react';
import Document,{Head,Html,Main,NextScript} from 'next/document';
import {Helmet} from 'react-helmet';
import { ServerStyleSheet } from 'styled-components'

class AppDocument extends Document{
     static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      const styleTags=
            <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            </>
      return {
        ...initialProps,
        styleTags,
        helmet:Helmet.renderStatic()
      }
    } finally {
      sheet.seal()
    }
  }
  render(){
    const {htmlAttributes,bodyAttributes,...helmet}=this.props.helmet;
    const htmlAttrs=htmlAttributes.toComponent();
    const bodyAttrs=bodyAttributes.toComponent();
    return(
      <Html {...htmlAttrs}>
      <Head>
          {this.props.styleTags}
          {Object.values(helmet).map(el=>el.toComponent())}
      </Head>
      <body {...bodyAttrs}>
          <Main/>
          <NextScript/>
      </body>
      </Html>
    )
  }
}

export default AppDocument;