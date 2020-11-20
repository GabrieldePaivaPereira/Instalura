import React, { 
    Fragment, useState 
} from 'react';

import { 
    Image,
    Text,  
    TouchableOpacity,
    View
} from "react-native";

import style from "./style"

const Foto = ({url, 
        descricao, 
        qtdLikes, 
        curtirFoto, 
        imgLike}) => {
    const [curtiu, setCurtiu] = useState(false)
    const [likes, setLikes] = useState(qtdLikes)

    const clicouCurtir = () => {
        const [novoEstadoCurtiu, qtd] = curtirFoto(curtiu, likes)
        setLikes(qtd);
        setCurtiu(novoEstadoCurtiu);
    }

    return (
        <Fragment>
            <Image 
                source={{uri:url}}
                style={style.imagem}
            />
            <Text>{descricao}</Text>
            <View style={style.viewLike}>
                <TouchableOpacity onPress={clicouCurtir}> 
                    <Image 
                        source={imgLike(curtiu)}
                        style={style.like}
                    />
                </TouchableOpacity>
                <Text>curtidas {likes}</Text>
            </View>
            
        </Fragment>
    );
};



export default Foto;
      