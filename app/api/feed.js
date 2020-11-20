import { Platform } from "react-native";

const lerFotos = async(callback) => {
    let url = "10.0.2.2";
    if(Platform.OS == "ios") {
        url = "192.168.0.3";
    }

    //const fotosHttp = await fetch(`http://${url}:3030/feed`);
    const fotosHttp = await fetch('http://192.168.0.3:3030/feed');
    const fotosJson = await fotosHttp.json();
    callback(fotosJson);
}

export default lerFotos;