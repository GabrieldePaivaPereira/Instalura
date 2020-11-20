import React, { 
  Fragment, 
  useEffect, 
  useState 
} from 'react';

import { 
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Platform
} from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';

import style from "./style";
import {doLogin} from "../../api/login"

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");

  const clickLogin = async () => {
    setMensagemErro("");
    try{
      const token = await doLogin(username, password);
      await AsyncStorage.setItem("@instalura_token",token);

      //Ir para Tela de Feed
      navigation.replace("Feed", { userName: username });

    } catch(erro) {
      setMensagemErro(erro.message);
    }
  }

  return (
    <Fragment>
      <View style={style.container}>
        <Image 
          style={style.logo}
          source={require('../../images/logo.png')}
          />
        <TextInput 
          style={style.inputs}
          placeholder="Username"
          onChangeText={texto => setUsername(texto)}
          />
        <TextInput 
          style={style.inputs}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={texto => setPassword(texto)}
          />
        <Text style={style.msgError}>{mensagemErro}</Text>
      </View>
      <TouchableOpacity 
        onPress={clickLogin}
        style={style.buttonView}>
        <Text style={style.buttonLabel}>Log in</Text>
      </TouchableOpacity>
    </Fragment>
  );
};

Login.navigationOptions = () => {
  const opcoes = {
    title:"Login"
  }
  if (Platform.OS = "android"){
    opcoes.headerShow = false;
  }
  return opcoes;
}

export default Login;
  