import React from "react"
import { Pressable, StyleSheet, Text } from "react-native"

import { Colors } from "@screens/onBoardingScreen/Components/Colors/NewColors"
import styles from "@screens/SalesFunnal/LandingPageScreen/LandingPageStyle"
import DropShadow from "react-native-drop-shadow"
import LinearGradient from "react-native-linear-gradient"

const CustomLinearGradientButton = ({ onPress, buttonText }: any) => {
  return (
    // <DropShadow style={styles.shadowProp}>
      <Pressable
        onPress={onPress}
        style={{
          marginTop: 28,
          width: "87%",
          // marginHorizontal: 30,
          // paddingVertical: 10,
          alignSelf: "center",
        }}
        accessible={true} // Ensure the element is accessible
        accessibilityLabel={buttonText} // Provide a content label for the button
        accessibilityRole="button" // Define the role of this element as a button
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          locations={[0.1, 0.7]}
          colors={Colors?.mixbtn}
          style={styles.linearGradientStyle}
        >
          <Text style={styles.getStartedText}>{buttonText}</Text>
        </LinearGradient>
      </Pressable>
    // </DropShadow>
  )
}

export default CustomLinearGradientButton
