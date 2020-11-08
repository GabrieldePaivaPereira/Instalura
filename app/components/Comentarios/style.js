const { StyleSheet } = require("react-native");

const style = StyleSheet.create({
    viewComentario:{
        flexDirection: "row",
        alignItems: "center",
        margin: 5
    },
    userName:{
        fontWeight: "bold"
    },
    comentario:{
        marginLeft: 5
    },
    icon:{
        width:30,
        height:30,
        marginRight:5
    }
})

export default style