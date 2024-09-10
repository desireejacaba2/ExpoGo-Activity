import { Image, StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TextInput } from 'react-native';

const RegistrationScreen = ({ navigation }) => {
  const handleSignupPress = () => {
    console.log('Signup button pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundImage}>
        <Image source={require("../assets/c.png")} style={styles.backgroundImage} />
      </View>
      <View style={styles.transparentContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Hello! Welcome</Text>
        </View>
        <View style={styles.signInContainer}>
          <Text style={styles.sigInText}>Please sign up to continue</Text>
        </View>
        <View style={styles.firstNameContainer}>
          <FontAwesome name="user" size={20} color="white" style={styles.firstNameIcon} />
          <TextInput style={styles.firstNameLabel} placeholder="First Name"/>
        </View>
        <View style={styles.lastNameContainer}>
          <FontAwesome name="user" size={20} color="white" style={styles.lastNameIcon} />
          <TextInput style={styles.lastNameLabel} placeholder="Last Name"/>
        </View>
        <View style={styles.emailAddressContainer}>
          <FontAwesome name="envelope" size={20} color="white" style={styles.emailAddressIcon} />
          <TextInput style={styles.emailAddressLabel} placeholder="Email Address" keyboardType="email-address" />
        </View>
        <View style={styles.passwordContainer}>
          <FontAwesome name="lock" size={20} color="white" style={styles.passwordIcon} />
          <TextInput style={styles.passwordLabel} placeholder='Password'/>
        </View>
        <View style={styles.confirmPasswordContainer}>
          <FontAwesome name="lock" size={20} color="white" style={styles.confirmPasswordIcon} />
          <TextInput style={styles.confirmPasswordLabel} placeholder='Confirm Password'/>
        </View>
      <TouchableOpacity style={styles.registerButton} onPress={handleSignupPress}>
        <Text style={styles.registerButtonText}>Signup</Text>
      </TouchableOpacity>
      <View style={styles.navigateContainer}>
        <Text style={styles.navigateLabel}>Already have an account? </Text>
     <TouchableOpacity onPress={() => navigation.navigate('Login')}>
       <Text style={styles.navigateLogin}>Login here</Text>
    </TouchableOpacity>
    </View>
    </View>
    </View>
  );
};
  
export default RegistrationScreen

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
      height: "85%",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      justifyContent: "center",
      textAlign: "center",
      marginHorizontal: 20,
      marginTop: "20%",
      borderRadius: 30,
  
    },
    firstNameContainer:{
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      flexDirection: "row",
      borderRadius: 30,
      marginTop: "20%",
      marginHorizontal: 20,
      height: 50,

    },
    firstNameLabel: {
      flex: 1,
      marginLeft: 5,
      color: "white",

    },
    firstNameIcon: {
      paddingHorizontal: 15,
      paddingVertical: 15,

    },
    lastNameContainer:{
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      flexDirection: "row",
      borderRadius: 30,
      marginTop: "7%",
      marginHorizontal: 20,
      height: 50,

    },
    lastNameLabel: {
      flex: 1,
      marginLeft: 5,
      color: "white",

    },
    lastNameIcon: {
      paddingHorizontal: 15,
      paddingVertical: 15,

    },
    emailAddressContainer:{
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      flexDirection: "row",
      borderRadius: 30,
      marginTop: "7%",
      marginHorizontal: 20,
      height: 50,

    },
    emailAddressLabel: {
      flex: 1,
      marginLeft: -2,
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
      marginTop: "7%",
      height: 50, 

    },
    passwordLabel: {
      flex: 1,
      marginLeft: 4,
      color: "white",

    },
    passwordIcon: {
      paddingHorizontal: 15,
      paddingVertical: 15,

    },
    confirmPasswordContainer:{
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      flexDirection: "row",
      borderRadius: 30,
      marginHorizontal: 20,
      marginTop: "7%",
      height: 50, 

    },
    confirmPasswordLabel: {
      flex: 1,
      marginLeft: 4,
      color: "white",

    },
    confirmPasswordIcon: {
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
    registerButton:{
      backgroundColor: "#0F7262",
      flexDirection: "row",
      borderRadius: 30,
      marginHorizontal: 30,
      height: 50, 
      marginTop: "20%",
      
    
    },
    registerButtonText:{
      flex: 1,
      fontSize: 15,
      textAlign: "center",
      marginVertical: 15,
      color: "white",

    },
    navigateContainer: {

    },
    navigateLabel: {
      marginLeft: 70,
      marginTop: 10,
      color: "white",

    },
    navigateLogin: {
      marginLeft: 240,
      marginTop: -20,
      color: "yellow",
    },

  });

