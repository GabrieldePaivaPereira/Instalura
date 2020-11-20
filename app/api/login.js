import { Platform } from "react-native";

const doLogin = async(username, password) => {
    let url = "192.168.0.3";
    if(Platform.OS == "ios") {
        url = "192.168.0.3";
    }

    const headerHTTP = {
        method: "POST",
        body: JSON.stringify({
            userName: username,
            password: password
        }),
        headers:{
            "Content-type": "application/json"
        }
    }

    const resposta = await fetch(`http://${url}:3030/users/login`, 
            headerHTTP);
    
    if (resposta.ok) {
        return resposta.headers.get("x-access-token");
    } else {
        throw new Error("Username or Password incorrect.");
    }
}

export {doLogin};