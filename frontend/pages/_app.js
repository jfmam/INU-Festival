import React from 'react';
import AppLayout from '../components/AppLayout'
import Head from 'next/head'
import withRedux from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../store';
import rootSaga from '../store-saga';


const Home=({Component,store,pageProps})=>{
    return(
        <Provider store={store}>
         <Head>
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b52519cdc58be5b6bdd09206ebb07182"></script>
        <title>InuFestival</title>
      </Head>
    <AppLayout>
        <Component {...pageProps}/>
    </AppLayout>
    </Provider>
    )
}

Home.getInitialProps=async (context)=>{
  const {ctx}=context;

  let pageProps={};
  if(context.Component.getInitialProps){
    pageProps=await context.Component.getInitialProps(ctx);
    console.log(pageProps);
  }
  return {pageProps};
}

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : compose(
      applyMiddleware(...middlewares),
      !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    );
  const store = createStore(reducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
};

export default withRedux(configureStore)(Home);
