import React from 'react';
import AppLayout from '../components/AppLayout'
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../store';
import rootSaga from '../store-saga';
import {Helmet} from 'react-helmet';
import {Container} from 'next/app'

const Home=({Component,store,pageProps})=>{
    return(

        <Provider store={store}>
     <Helmet
          title="INUfestival"
          htmlAttributes={{ lang: 'ko' }}
          meta={[{
            charset: 'UTF-8',
          }, {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover',
          }, {
            'http-equiv': 'X-UA-Compatible', content: 'IE=edge',
          }, {
            name: 'description', content: 'festival',
          }, {
            name: 'og:title', content: 'festival',
          }, {
            name: 'og:description', content: 'festival',
          }, {
            property: 'og:type', content: 'website',
          }]}

        />
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
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export default withRedux(configureStore)(withReduxSaga(Home));
