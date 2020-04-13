
/*global kakao*/
import React, { useEffect} from "react";


class Boothmap extends React.Component {
   componentDidMount() {
        const script = document.createElement('script');
        script.async = true;
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=b52519cdc58be5b6bdd09206ebb07182";
        document.body.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                let container = document.getElementById('map');
                let options = {
                    center: new kakao.maps.LatLng(37.375123, 126.632414),
                    level:3
                };
                const map=new window.kakao.maps.Map(container,options)
            });
        };
    }

    render() {
        return (
            <div className="App" id="map" style={{width:'100%' ,height:'30rem'}}>
                
                
            </div>
        );
    }
}
export default Boothmap;