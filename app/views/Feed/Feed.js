import React, { 
  Fragment, 
  useEffect, 
  useState 
} from 'react';

import { 
  FlatList,
  StatusBar,
  SafeAreaView
} from "react-native";

import {Cabecalho} from '../../components/Cabecalho';
import {Comentarios} from '../../components/Comentarios';
import {Foto} from '../../components/Foto';

import lerFotos from '../../api/feed'
import { curtirFoto, imgLike } from '../../api/curtidas';
import { enviarComentario } from '../../api/comentarios';

const Feed = () => {
  const [fotos, setFotos] = useState([])

  useEffect(() => {
    lerFotos(setFotos);
  }, [])
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
      />
      <FlatList
        data = {fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item} )=>
          <Fragment>
              <Cabecalho 
                usuario={item.userName}
                urlPhoto={item.userURL}
              />
              <Foto 
                url={item.url}
                descricao={item.description}
                qtdLikes={item.likes}
                imgLike={imgLike}
                curtirFoto={curtirFoto}
              />
              <Comentarios 
                comentarios={item.comentarios}
                enviarComentario={enviarComentario}
              />
            </Fragment>
        }
      />
    </SafeAreaView>
      
  );
};
  
Feed.navigationOptions = ({ navigation }) => {
  const opcoes = {
    title: navigation.getParam("userName")
  }
  //if (Platform.OS = "android"){
  //  opcoes.headerShow = false;
  //}
  return opcoes;
}

  export default Feed;
  