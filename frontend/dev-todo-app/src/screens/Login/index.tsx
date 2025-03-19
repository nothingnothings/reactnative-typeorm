import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { setUserId } from '../../store/reducers/auth';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      // Send login request to backend
      const response = await axios({
        method: 'POST',
        url: '/auth/login',
        data: {
          email,
          password,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        // On successful login, store userId and token in Redux store
        dispatch(
          setUserId({
            userId: response.data.userId, // Assume the backend sends userId and token
            token: response.data.token,
          })
        );

        // Navigate to a different screen after login (e.g., dashboard)
        navigation.navigate('/lists'); // Replace 'home' with your target screen
      } else {
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;
