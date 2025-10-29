



class _AddressMethod{

    setScript(){
        const script = document.createElement("script");
        script.setAttribute('id', 'mapService');
        script.async = true;
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.k_MAPS_KEY}&autoload=false&libraries=services`;
        document.head.appendChild(script);
        return script

    }
    callAddressPopup(callback) {
        const containers = document.createElement('div');
        containers.setAttribute('id', 'address-popup-container');
        containers.setAttribute('class', 'addressPopup_div_dim');
        if (document.getElementById('address-popup-container')) {
            document.body.removeChild(document.getElementById('address-popup-container'));
            return;
        }
        document.body.appendChild(containers);
        ReactDOM.render( < Address callback = {callback}/>,containers);
   
    };

    useGeocoder() {
    
            setScript();


    }
    useReverseGeocoding() {
        
        let returnAdress;
        const script = this.setScript();
        script.onload = () => {
            kakao.maps.load(async () => {
            var geocoder = new kakao.maps.services.Geocoder();
            let coord = new kakao.maps.LatLng(37.56496830314491, 126.93990862062978);
            geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
            })
        }
        const callback = (result, status)=>{
            if (status === kakao.maps.services.Status.OK) {
                return result[0]  
            }
        }
        console.log(returnAdress)
        return returnAdress

    }

}

export const AddressUtill = new _AddressMethod();

