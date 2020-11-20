import React, { 
    Fragment, useState 
} from 'react';

import { 
    FlatList,
    Image,
    Text,  
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

import style from './style';

const Comentarios = ( {comentarios, enviarComentario} ) => {
    const [estComentarios, setComentarios] = useState(comentarios);
    
    const addComment = () => {
        campoInput.clear();
        setComentarios([...estComentarios, 
            enviarComentario({conteudo: conteudoCampoInput, userName: "paiva"})
        ]);
    };

    let campoInput;
    let conteudoCampoInput = "";
    return (
        <Fragment>
            <FlatList
                data = {estComentarios}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item })=>
                    <View style={style.viewComentario}>
                        <Text style={style.userName}>{item.userName}</Text>
                        <Text style={style.comentario}>{item.text}</Text>
                    </View>
            }/>
            <View style={style.viewComentario}>
                <TextInput 
                    ref={textInput => campoInput = textInput}
                    onChangeText={texto => conteudoCampoInput = texto}
                    style={{flex:1}}
                    placeholder={"Adicione um comentario..."}/>
                <TouchableOpacity onPress={addComment}>
                    <Image 
                        style={style.icon}
                        source={require("../../images/send.png")}
                    />
                </TouchableOpacity>
            </View>
        </Fragment>
    );
};

export default Comentarios;