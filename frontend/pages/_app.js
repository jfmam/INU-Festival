import React from 'react';
import AppLayout from '../components/AppLayout'
import Head from 'next/head'

const Home=({Component})=>{

    return(
        <div>
         <Head>
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b52519cdc58be5b6bdd09206ebb07182"></script>
        <title>InuFestival</title>
      </Head>
    <AppLayout>
        <Component/>
    </AppLayout>
    </div>
    )
}

export default Home;