import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AboutScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>hello about</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    padding: 20,
  },
});

export default AboutScreen;
