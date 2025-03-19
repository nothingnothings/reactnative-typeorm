import { Text, TouchableOpacity, View } from 'react-native';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { sum } from '../../store/reducers/auth';

const Login = () => {
  const value = useAppSelector((store) => store.auth.value);
  const dispatch = useAppDispatch();

  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => dispatch(sum())}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
