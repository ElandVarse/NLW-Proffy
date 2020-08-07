import React from "react";
import { View, ImageBackground, Text } from "react-native";

import styles from "./GiveClassesStyle";

import giveClassesImage from "../../assets/images/give-classes-background.png";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function GiveClasses() {
  const { goBack } = useNavigation()

  function handleNavigateGoBack(){
    goBack()
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesImage}
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>

        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma Web.
        </Text>
      </ImageBackground>

      <RectButton onPress={handleNavigateGoBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
}
