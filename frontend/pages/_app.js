import React from 'react';
import AppLayout from '../components/AppLayout'
import Head from 'next/head'

const Home=({Component})=>{

    return(
        <div>
         <Head>
        <title>InuFestival</title>
      </Head>
    <AppLayout>
        <Component/>
    </AppLayout>
    </div>
    )
}

export default Home;