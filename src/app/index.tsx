import { useRouter } from 'expo-router';
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import CustomTextInput from "../components/TextInputComponent";

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [poassword, setPassword] = useState('')
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const handleLogin = () => {
    setLoading(true);
    router.navigate('./tabs')
  }
  
  return (
    <View
      style={styles.container}
    > 
      <CustomTextInput label='Email or Username' value={email} onChangeText={setEmail} />
      <CustomTextInput label='Password' value={poassword} onChangeText={setPassword} />
      <ButtonComponent
        title="Login"
        onPress={handleLogin}
        loading={loading}
        backgroundColor="#1E90FF"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  }
})
