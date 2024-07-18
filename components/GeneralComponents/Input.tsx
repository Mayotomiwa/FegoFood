import Colors from '@/constants/Colors';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';

const green = '#495E57';
const red = '#C00404';

interface InputProps extends TextInputProps {
  error?: string;
  password?: boolean;
  onFocus?: () => void;
}

const Input: React.FC<InputProps> = ({
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const [seePassword, setSee] = useState(password);

  return (
    <View>
      <View
        style={[
          inputStyles.inputContainer,
          {
            borderColor: `${error} ? ${Colors.red} : ${focused} ? ${Colors.primary} : ${Colors.light}`,
            alignItems: 'center',
          },
        ]}
      >
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setFocused(true);
          }}
          onBlur={() => setFocused(false)}
          secureTextEntry={seePassword}
          style={inputStyles.input}
          {...props}
        />
        {password && (
          <TouchableOpacity
            style={inputStyles.wrapperIcon}
            onPress={() => setSee(!seePassword)}
          >
            <Text style={inputStyles.iconText}>{seePassword ? 'Show' : 'Hide'}</Text>
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={inputStyles.errorText}>{error}</Text>}
    </View>
  );
};

const inputStyles = StyleSheet.create({
  inputContainer: {
    height: 40,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginHorizontal: 40,
    marginVertical: 24,
    padding: 10,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: green,
  },
  input: {
    fontSize: 16,
    color: 'black',
    flex: 1,
  },
  wrapperIcon: {
    position: 'absolute',
    right: 0,
    padding: 10,
    color: green,
    fontWeight: 'bold',
    fontSize: 20,
  },
  iconText: {
    color: green,
    fontSize: 18,
  },
  errorText: {
    color: red,
    fontSize: 12,
    fontWeight: '900',
    marginHorizontal: 45,
  },
});

export default Input;
