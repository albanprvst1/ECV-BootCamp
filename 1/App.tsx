// App.tsx
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from "react";
import  LoginScreen from "./src/screens/LoginScreen";
import { TermsScreen } from "./src/screens/TermsScreen";
import { StarshipFeedScreen } from './src/screens/StarshipFeedScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <React.Fragment>
       <StarshipFeedScreen />
      </React.Fragment>
    </SafeAreaProvider>
  );
};

// always export default App otherwise Expo is not happy
export default App;


