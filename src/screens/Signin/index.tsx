import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image
} from 'react-native';

import { ButtonIcon } from '../../components/Buttonicon';
import IllustrationImg from '../../assets/illustration.png'
import { styles } from './style';

export function SignIn(){
  const [text, setText] = useState('');
  

  return(
    <View style={styles.container}>
     
      <Image 
        source={IllustrationImg}  
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}
          e organize suas{'\n'}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>

        <ButtonIcon 
        title="Entrar com Discord"
        activeOpacity={0.5}/>
      </View>
    </View>
  )
}