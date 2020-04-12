
/*global kakao*/
import React, { useEffect} from "react";


class Boothmap extends React.Component {
   componentDidMount() {
        const script = document.createElement('script');
        script.async = true;
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=b52519cdc58be5b6bdd09206ebb07182&autoload=false";
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                let el = document.getElementById('map');
                let map = new kakao.maps.Map(el, {
                    center: new kakao.maps.LatLng(37.375123, 126.632414)
                });
               
            });
        };
    }

    render() {
        return (
            <div className="App" id="map" style={{width:'100%' ,height:'30rem'}}>gd</div>
        );
    }
}
export default Boothmap;