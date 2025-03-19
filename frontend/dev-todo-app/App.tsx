import { PaperProvider } from 'react-native-paper';
import NavigatorRouter from './src/routes';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigatorRouter />
      </PaperProvider>
    </Provider>
  );
}
