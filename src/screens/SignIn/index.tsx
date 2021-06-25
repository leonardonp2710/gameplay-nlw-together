import React from "react";
import { 
  View,
  Text,
  Image,
  Alert,
  ActivityIndicator
} from "react-native";

import { userAuth } from "../../hooks/auth";

import IllustrationImg from '../../assets/illustration.png'
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";

export function SignIn(){
  const { loading, signIn } = userAuth();

  async function handleSignIn() {
    try {
      await signIn();
      
    } catch (error) {
      Alert.alert(error);
    }
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

          {
            loading ? <ActivityIndicator color={theme.colors.primary}/>
            :
            <ButtonIcon 
              title="Login with Discord"
              onPress={handleSignIn}
            />
          }
        </View>
      </View>
    </Background> 
  );
}