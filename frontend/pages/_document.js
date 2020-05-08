import React from 'react';
import Document,{Head,Html,Main,NextScript} from 'next/document';
import {Helmet} from 'react-helmet';
import { ServerStyleSheet } from 'styled-components'

class AppDocument extends Document{
    static async getInitialProps(context){
        const sheet=new ServerStyleSheet()
        const page=context.renderPage((App)=>(props)=>sheet.collectStyles(<App {...props}/>))
        const styletags=sheet.getStyleElement();
        return {...page,helmet:Helmet.renderStatic(),styletags};//ssr을 할 수있다.
        //return한값은 props로 다시온다.
    }
    render(){
        const {htmlAttributes,bodyAttributes,...helmet}=this.props.helmet;
        // getInitialProps에서 리턴해준것은 props에서 가져올수있다.
        const htmlAttrs=htmlAttributes.toComponent();
        //html에 대한 속성들이 모두들어있다.lang 등
        //toComponent는 객체인 속성을 리액트 컴포넌트로 쓸수있게 바꿔준다.
        const bodyAttrs = bodyAttributes.toComponent();
        return(
            <Html {...htmlAttrs}>
                <Head>
                    {this.props.styletags}
                    {Object.values(helmet).map(v=>v.toComponent())}
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