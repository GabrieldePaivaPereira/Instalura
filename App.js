import React, { 
  Fragment, 
  useEffect, 
  useState 
} from 'react';

import { 
  ScrollView,
  FlatList
} from "react-native";

import {Cabecalho} from './app/components/Cabecalho';
import {Comentarios} from './app/components/Comentarios';
import {Foto} from './app/components/Foto';

import lerFotos from './app/api/feed'


const App = () => {
  const [fotos, setFotos] = useState([])

  useEffect(() => {
    lerFotos(setFotos);
  }, [])

  return (
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
            />
            <Comentarios comentarios={item.comentarios}/>
          </Fragment>
        }
      />
      
  );
};



export default App;
