import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

const Signup = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    // First Name validation
    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
      valid = false;
    }

    // Last Name validation
    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
      valid = false;
    }

    // Email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email";
      valid = false;
    }

    // Phone Number validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
      valid = false;
    } else if (!phoneRegex.test(phoneNumber)) {
      newErrors.phoneNumber = "Enter a valid phone number";
      valid = false;
    }

    // Password validation
    if (!password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSignup = () => {
    if (validateForm()) {
      Alert.alert("Success", "Account created successfully!");
      navigation.navigate("Bottom"); // Navigate to Login screen after signup
    }
  };
//   const handleLogin=()=>{
//     navigation.navigate("login")
//   }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SIGN UP</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
      </View>
      {errors.firstName && <Text style={styles.error}>{errors.firstName}</Text>}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
      </View>
      {errors.lastName && <Text style={styles.error}>{errors.lastName}</Text>}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="number-pad"
        />
      </View>
      {errors.phoneNumber && <Text style={styles.error}>{errors.phoneNumber}</Text>}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.signtext}>Sign Up</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", marginBottom: 25, padding: 10 }}>
        <Text style={styles.donthave}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.Login}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#0A0F24",
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 5,
    width: "90%",
    marginBottom: 5,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: "black",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#00A2FF",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#22577A",
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    width: "90%",
    alignItems: "center",
    borderWidth: 1,
  },
  signtext: {
    color: "white",
    fontSize: 15,
  },
  donthave: {
    fontSize: 15,
    color: "white",
    fontWeight: "500",
  },
  Login: {
    fontSize: 18,
    color: "#00A2FF",
    marginLeft: 5,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
});

export default Signup;
