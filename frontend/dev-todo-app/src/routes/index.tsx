import { View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Lists from '../screens/Lists';

// We define all our routes and the props they will receive.

type AuthStackParamsList = {
  login: undefined;
  register: undefined;
  lists: undefined;
  list: { listId: string }; // Dynamic route for each list (e.g., listId)
  task: { listId: string; taskId: string }; // Dynamic route for each task under a specific list
};

const NavigatorRouter = () => {
  const Stack = createStackNavigator<AuthStackParamsList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen component={Login} name="login" />
        <Stack.Screen component={Register} name="register" />
        <Stack.Screen component={Lists} name="lists" />
        <Stack.Screen component={ListDetail} name="list" />
        <Stack.Screen component={TaskDetail} name="task" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigatorRouter;
