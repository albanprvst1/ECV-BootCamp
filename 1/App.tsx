import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from "react";
import LoginScreen from "./src/screens/LoginScreen";
import { TermsScreen } from "./src/screens/TermsScreen";
import useStarships from "./src/screens/DataScreen";
import { StarshipFeedScreen } from './src/screens/StarshipFeedScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <React.Fragment>
        <LoginScreen/>
      </React.Fragment>
    </SafeAreaProvider>
  );
};

export default App;
