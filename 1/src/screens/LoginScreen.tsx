import React from 'react';
import {Button,Text,View, StyleSheet, TextInput} from 'react-native';

const TextInputExample = () => {
  const [email, onChangeEmail] = React.useState('');
  const [mdp, onChangeMDP] = React.useState('');

  return (
    <React.Fragment>
    <View>
    <Text style={styles.text} > SpaceCraft </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="email"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeMDP}
        value={mdp}
        placeholder="mdp"
        keyboardType="numeric"
      />
      <Button color="purple" title="Login" />
      <Text style = {styles.text2}> Read Terms and conditions  </Text>
    </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 50,
    borderWidth: 1,
    padding: 10,
    marginBottom :30,
  },
  text: {
    color : "white", 
    fontSize : 20,
    backgroundColor: "purple",
    padding : 100,
    paddingLeft: 135,
    marginBottom : 20,
  },
  text2: {
    marginLeft :105,
  },
});

export default TextInputExample;