// App.tsx
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from "react";
import  LoginScreen from "./src/screens/LoginScreen";
import { TermsScreen } from "./src/screens/TermsScreen";

const App = () => {
  return (
    <SafeAreaProvider>
      <React.Fragment>
       <LoginScreen />
       <TermsScreen />
      </React.Fragment>
    </SafeAreaProvider>
  );
};

// always export default App otherwise Expo is not happy
export default App;


