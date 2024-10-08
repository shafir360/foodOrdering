import { Text, View, StyleSheet, TextInput,Alert } from "react-native";
import React, { useState } from "react";
import Colors from "@/src/constants/Colors";
import Button from "@/src/components/Button";
import { Link } from "expo-router";
import { supabase } from "@/src/lib/supabase";



const SignIn = () =>{
    
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [loading,setLoading] = useState(false)

    async function signInWithEmail() {
      setLoading(true)
      const {error} = await supabase.auth.signInWithPassword({email, password})
      if(error) Alert.alert(error.message)
      setLoading(false)
    }


    return(
        <View style={styles.container}>
            <Text style={styles.label}>Email</Text>
            <TextInput style = {styles.input} value={email} onChangeText={setEmail} placeholder="your-email@domain.com"/>
            <Text>Password</Text>
            <TextInput style = {styles.input} value={password} onChangeText={setPassword} placeholder="" secureTextEntry/>
            <Button disabled ={loading} text ={loading ? "Signing in..." : "Sign in" }  onPress={signInWithEmail}/>
            <Link href = "/sign-up" style= {styles.textButton}>Create an account</Link>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
      padding: 20,
      justifyContent: 'center',
      flex: 1,
    },
    label: {
      color: 'gray',
    },
    input: {
      borderWidth: 1,
      borderColor: 'gray',
      padding: 10,
      marginTop: 5,
      marginBottom: 20,
      backgroundColor: 'white',
      borderRadius: 5,
    },
    textButton: {
      alignSelf: 'center',
      fontWeight: 'bold',
      color: Colors.light.tint,
      marginVertical: 10,
    },
  });

export default SignIn