import React, {Fragment} from "react";
import {
    Text,
    Image,
    View
} from "react-native";

import style from "./style";

const Cabecalho = ({usuario, urlPhoto}) => {
    return (
        <View style={style.cabecalho}>
            <Image 
                source={{uri: urlPhoto}}
                style={style.fotoUsuario}
            />
            <Text style={style.label_usuario}>{usuario}</Text>
        </View>
    );
}

export default Cabecalho;