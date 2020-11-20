import {StyleSheet, Dimensions} from "react-native";

const largura = Dimensions.get("screen").width;

const style = StyleSheet.create({
    container: {
        flexGrow: 2,
        justifyContent: "center",
        alignItems: "center"        
    },
    logo: {
       width: largura*0.5,
       height: largura*0.5
    },
    inputs: {
        width: largura*0.8,
        textAlign: "center",
        marginTop: 40,
        fontSize: 20
    },
    buttonView: {
        backgroundColor: "#5c1c4c",
        padding: 10,
        margin: 10,
        marginBottom: 48,
        borderRadius:5,
        elevation: 5,

        justifyContent:"center",
        alignItems:"center"

    },
    buttonLabel:{
        color: "#FFFFFF",
        fontSize: 24
    },
    msgError:{
        color: "#FF0000"
    }
});

export default style;