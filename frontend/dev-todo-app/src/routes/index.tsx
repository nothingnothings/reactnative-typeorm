import { View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import Register from '../screens/Register';

// We define all our routes and the props they will receive.

type AuthStackParamsList = {
  login: undefined;
  register: undefined;
};

const NavigatorRouter = () => {
  const Stack = createStackNavigator<AuthStackParamsList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen component={Login} name="login" />
        <Stack.Screen component={Register} name="register" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigatorRouter;
