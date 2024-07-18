import Input from "@/components/GeneralComponents/Input";
import Seperator from "@/components/GeneralComponents/Seperator";
import Colors from "@/constants/Colors";
import { LogInProps } from "@/types/InputProps";
import { AntDesign } from "@expo/vector-icons";
import { Link, useNavigation } from "expo-router";
import React, { useState } from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LogIn = () => {
    const navigation = useNavigation();

  const [inputs, setInputs] = useState<LogInProps>();
  const [errors, setErrors] = useState<Partial<LogInProps>>({});

  const handleError = (errorMessage: string, input: keyof LogInProps) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  const handleOnChange = (text: string, input: keyof LogInProps) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const logIn = () => {
    Keyboard.dismiss();
    let valid = true;

    if (!inputs?.email) {
      handleError("Please Enter Your Email", "email");
      valid = false;
    }

    if (!inputs?.password) {
      handleError("Please Enter Your Password", "password");
      valid = false;
    }

    if (valid) {
      handleLogin();
    }
  };

  const handleLogin = () => {
    navigation.goBack()
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <Input
          value={inputs?.email}
          placeholder="email"
          keyboardType="email-address"
          error={errors.email}
          onChangeText={(text) => handleOnChange(text, "email")}
        />
        <Input
          value={inputs?.password}
          placeholder="password"
          error={errors.password}
          onChangeText={(text) => handleOnChange(text, "password")}
        />
        <TouchableOpacity style={styles.inputButton} onPress={logIn}>
          <Text style={styles.linkText}>LogIn</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <View style={styles.linkContainer}>
        <Link href={"/signup"}>
          <TouchableOpacity onPress={() => {}} style={styles.linkStyle}>
            <Text style={styles.linkText}>Create a new Account</Text>
          </TouchableOpacity>
        </Link>
        <Seperator />
        {Platform.OS === "android" ? (
          <View style={styles.linkIcons}>
            <TouchableOpacity>
              <AntDesign name="google" size={20} />
            </TouchableOpacity>
            <Text style={styles.seperatorText}>or</Text>
            <TouchableOpacity>
              <AntDesign name="apple1" size={20} />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.linkIcons}>
            <TouchableOpacity>
              <AntDesign name="google" size={20} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {},
  inputContainer: {},
  inputText: {
    color: Colors.plain,
    fontWeight: "bold",
    fontSize: 16,
  },
  inputButton: {
    backgroundColor: Colors.primary,
    padding: 16,
    alignItems: "center",
    borderRadius: 10,
  },
  inputIcons: {},
  linkContainer: {},
  linkStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  seperatorText: {
    color: Colors.primary,
    textAlign: "center",
  },
  linkText: {
    color: Colors.primary,
    textAlign: "center",
    marginBottom: 20,
  },
  linkIcons: {
    flexDirection: "row",
    padding: 10,
  },
});
