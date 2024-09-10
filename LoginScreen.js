import { Image, StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TextInput } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleLoginPress = () => {
    console.log('Login button pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundImage}>
        <Image source={require("../assets/c.png")} style={styles.backgroundImage} />
      </View>
      <View style={styles.transparentContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome Back!</Text>
        </View>
        <View style={styles.signInContainer}>
          <Text style={styles.sigInText}>Please sign in to continue</Text>
        </View>
        <View style={styles.emailAddressContainer}>
          <FontAwesome name="envelope" size={20} color="white" style={styles.emailAddressIcon} />
          <TextInput style={styles.emailAddressLabel} placeholder="Email Address" keyboardType="email-address" />
        </View>
        <View style={styles.passwordContainer}>
          <FontAwesome name="lock" size={20} color="white" style={styles.passwordIcon} />
          <TextInput style={styles.passwordLabel} placeholder='Password' />
        </View>
        <Text style={styles.forgotPasswordLabel}>Forgot Password</Text>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.navigateContainer}>
        <Text style={styles.navigateLabel}>Don't have an account yet? </Text>
     <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
       <Text style={styles.navigateRegister}>Sign up here</Text>
    </TouchableOpacity>
    </View>
    </View>
  );
};
  
export default LoginScreen

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: "#013C30",
      position: 'relative',
      
    },
    backgroundImage: {
      position: 'absolute', 
      top: 10,
      left: 0,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      
    },
    welcomeContainer:{

    },
    welcomeText:{
      textAlign: "center",
      marginTop: -20,
      fontSize: 35,
      fontWeight: "600",
      color: "white",

    },
    signInContainer:{
  
    },
    sigInText:{
      textAlign: "center",
      fontSize: 12,
      color: "white",
      marginTop: 10,

    },
    transparentContainer:{
      width: "90%",
      height: "60%",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      justifyContent: "center",
      textAlign: "center",
      marginHorizontal: 20,
      marginTop: "40%",
      borderRadius: 30,
  

    },
    emailAddressContainer:{
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      flexDirection: "row",
      borderRadius: 30,
      marginBottom: 30,
      marginTop: "20%",
      marginHorizontal: 20,
      marginVertical: 20,
      height: 50,

    },
    emailAddressLabel: {
      flex: 1,
      marginLeft: 5,
      color: "white",

    },

    emailAddressIcon: {
      paddingHorizontal: 15,
      paddingVertical: 15,
    },

    passwordContainer:{
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      flexDirection: "row",
      borderRadius: 30,
      marginHorizontal: 20,
      height: 50, 

    },
    passwordLabel: {
      flex: 1,
      marginLeft: 10,
      color: "white",

    },
    passwordIcon: {
      paddingHorizontal: 15,
      paddingVertical: 15,

    },
    forgotPasswordLabel:{
      color: "white",
      textAlign: "right",
      width: "90%",
      fontSize: 12,
      marginVertical: 15,
      marginBottom: 150,

    },
    loginButton:{
      backgroundColor: "#0F7262",
      flexDirection: "row",
      borderRadius: 30,
      marginHorizontal: 40,
      height: 50, 
      marginTop: "-30%",
      
    
    },
    loginButtonText:{
      flex: 1,
      fontSize: 15,
      textAlign: "center",
      marginVertical: 15,
      color: "white",

    },
    navigateContainer: {

    },
  navigateLabel: {
    marginLeft: 80,
    marginTop: 10,
    color: "white",

  },
  navigateRegister: {
    marginLeft: 255,
    marginTop: -20,
    color: "yellow",
  },

});


