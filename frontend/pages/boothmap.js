
/*global kakao*/
import React, { useEffect} from "react";




class Boothmap extends React.Component {
    state={
        toggle:true
    }

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
                const map=new window.kakao.maps.Map(container,options);
                let imageSrc =this.state.toggle ?'/shape.png':'/clickShape.png' // 마커이미지의 주소입니다    
                let imageSize = new kakao.maps.Size(17, 23) // 마커이미지의 크기입니다
                let imageOption = {offset: new kakao.maps.Point(37.375123, 126.632414)};
               var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
                let markerPosition = new kakao.maps.LatLng(37.375123, 126.632414); // 마커가 표시될 위치입니다
               
                var marker = new kakao.maps.Marker({
                    position: markerPosition,
                    image: markerImage // 마커이미지 설정 
                });
                marker.setMap(map);
            });
        };
    }
    componentDidUpdate(){
        kakao.maps.load(()=>{ kakao.maps.event.addListener(marker, 'click', ()=> {
                    // 마커 위에 인포윈도우를 표시합니다
                   this.setState({toggle:false})
                   console.log(this.state.toggle)
                });})
  
    }

    render() {
        return (

            <div className="App" id="map" style={{width:'100%' ,height:'30rem'}}>   
            </div>
        );
    }
}
export default Boothmap;