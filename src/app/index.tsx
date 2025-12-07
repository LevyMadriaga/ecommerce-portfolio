import { StyleSheet, View } from 'react-native';
import LoginScreen from "./login-screen";

export default function Index() {
  return (
    <View style={styles.root} >
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 20
  }
})