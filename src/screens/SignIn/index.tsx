import React from "react";
import { 
  View,
  Text,
  Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import IllustrationImg from '../../assets/illustration.png'
import { styles } from "./styles";

import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";

export function SignIn(){
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home');
  }

  return(
    <Background>
      <View style={styles.container}>
        <Image 
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
          />

        <View style={styles.content}>
          <Text style={styles.title}>
          Connect and{'\n'}
          organize your{'\n'}
          matches
          </Text>
          <Text style={styles.subtitle}>
          Create groups to play your favorite{'\n'}
          games with your friends
          </Text>

          <ButtonIcon 
            title="Login with Discord"
            activeOpacity={0.8}
            onPress={handleSignIn}
          />
        </View>
      </View>
    </Background> 
  );
}